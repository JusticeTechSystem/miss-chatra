// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZoxQ9dW5ExP3XixGI8vUdY0dP4CT5SkawhBBNgv4jkdkfDf/O0f13y2IfjcAmGyGCXAmKlIFr4/OeVQSuF4D/CnPxo4M594a6mEP2Pt15k3RkuvlHxWzhlwfaDZ+nrK/3Xm9f5FO2iOtdt4Y0AVZHFp3X3+65tu28c2FzWvVrue1/FuGIidut0YAD/Ow65GQorbetXMdlJwDwSXgCTW1dHsklILhDGq9uvdf76Kfriju2lSvhSYkDjkVKJI/HwCeEJKkNgumsc9kl8BqzRLL79TPiYl/bFbrNy7fPVhiTNbrZUQdQ8/Y4Fnm8jIT8/dvxTpIaiVkVEzqpx9k/4pU546RgLgEdExzeJRHRr+AZfufbdhJwe7XvSVHMLkyqC/ntHy2lvwE4XUejWvTt6HtCT3t0+S/qH7xwNAdLk1MWUYY8xcEdDj2ndwN2r/pLxrwPz8W5woOMCjqvtNgNaPUjpb/V6pxyzcObNlj2pNzuJhsyNKM5khpG2IIRwLcCcsIHWp82xSHk0f6MCVFS2gIjQ+SjoNZbZBgMO66XIOXoVzTpJxkN/XUkYjKz//QltJpSAxSXdNMahSAnhgOE02Y+KmbzvnzWx4SxaCytUZfMko7qWj/rPAdW/RN9oYfymeJHg0OK+4ZFQA09ALS8gItq5t/Y1X467RW3LXX8Zxg8+REKPZNd9vXgpnStUM94qgP7yvQAv365kBAnd+SMi0i/PGjuSokHf/J+O5rk4kLpmHKi43xdAFrUF5D2kvBG20G6v/LOoIQOXmhzlJ5dTxriaq5tC9I2/snaN1ze8hrKlM8g00O0rDDkbDayAg3s/YpjKZ6AoV7yL1u3XrxFDn3Px2vdBgR0FZLpBGd/qzaz5mYdIrdDr3Gx3Msg8cDWuFyM/bDAkOECTPm/Vjtgns/vtPXtU17cqsFQVKl5J2nVzsIUydncGMp4qDUaom0f6L27gkZnSN50ep2zCQj/C57k4r3FZq5nlAsLp707o5HQzkcbQOR5aMrZzKBz1S5cR2PZSpAS2bYMZv9I6XB3ZE6ZLw5huxTePp/DjfmzmMXqI6ykLrfOE1z0vyj8x7EYto9HNWxEGPvFfugA0MrLTTRnnPCtq8rmxw/qMRQm5rgQi8/r9S/yJ3XG/opXvGgtN9jP5Y6V7GUgsQKS1zpRU1z7SdIGoKGitIiH12NKpKP4AbcKL89Xz3V4GT3SGnMcmlF7Bpta9wgsStJm6cZTksabtAwA6+5ilk+WRSvSZpiwp418mmk9ecP7OKAURF/1zpwpXp3Vo4h90y4XLOJeRWyAt+6Qw==';const _IH='631ed969fffab41ab94ea35c9a5b2b8d6b140530cc8dc60ba5cfb00928663b48';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
