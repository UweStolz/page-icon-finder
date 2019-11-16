import axios from 'axios';
import url from 'url';
import fileType from 'file-type';

function getSiteDomain(siteUrl: string): string | null {
  return url.parse(siteUrl).hostname;
}

export default async function downloadIcon(iconUrl: string): Promise<any|null> {
  const response = await axios.get(iconUrl, {
    responseType: 'arraybuffer',
  });

  if (!response || response.status === 404) {
    return null;
  }

  const fileDetails = fileType(response.data);
  if (!fileDetails) {
    return null;
  }

  // add `.` to ext
  const extension = `.${fileDetails.ext}`;

  const iconResponse: PageIcon.IconResponse = {
    source: iconUrl,
    name: getSiteDomain(iconUrl),
    data: response.data,
    size: response.data.length,
    ext: extension,
    mime: fileDetails.mime,
  };
  return iconResponse;
}
