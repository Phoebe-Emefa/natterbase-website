import DOMPurify from 'dompurify'
export const getFileType = (type: string) => {
    const Type = type.split('/');
    if (Type[0] === 'image') {
      return 'img';
    }
    if (Type[0] === 'video') {
      return 'vid';
    }
    return 'doc';
  };

  export const humanFileSize = (bytes: number, dp = 1) => {
    const thresh = 1024;
  
    if (Math.abs(bytes) < thresh) {
      return `${bytes} B`;
    }
  
    const units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let u = -1;
    const r = 10 ** dp;
  
    let BYTES = bytes;
    do {
      BYTES /= thresh;
      // eslint-disable-next-line no-plusplus
      ++u;
    } while (
      Math.round(Math.abs(BYTES) * r) / r >= thresh &&
      u < units.length - 1
    );
  
    return `${BYTES.toFixed(dp)} ${units[u]}`;
  };


  export const sanitize = ( content: any ) => {
    return process.browser ? DOMPurify.sanitize( content ) : content;
  };