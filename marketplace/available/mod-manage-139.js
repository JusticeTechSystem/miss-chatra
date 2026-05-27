// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QL5Etmy9tF+yPnlIYVZmKx/IIdOaPgraXneo4PN4Ta/tkanB+ev7zW2zdycwHAK1TrlyleLIJyRGifjDvnDM/qQvfWm3dcJ+z3ZNmnLPzZAdPC12aDP1jtJP0jZYaHyN1H1tHoJMjmVa4fXV6ygQ+7QC/rozcY0TUMQuV1anb4FnI9BM8hw6+2KvoW+CDMBYbk92rFScbGYZ3eSEM3hDHDgsNteBnK3CHliZq7WMHhRTSekQV2GU6c8IU3QYcsXuOt02CIxuKtxFbTd4nw9nDW+9D6fEnCKH+M7U13m++tCV/YR6rQAXt707qak1SdEnspxubIfsp8lRQnHWkIwM1ls88ddCNt2TBxF28mAVORMaXucnT/RYJnJzRxarpqeAJYOo9Nh6BS1Qb7OTd/JUyggFAxPpIvhkxE58nfi1S5xGQPiueaUM0AM6zpHz8OukNvUWMi7GHQi+nmpGM3weAxHYAxUbEoC17d2tvvEyqPoM8dnleIfGrjbQItoiaXSE2KQ0EmR4wXty7IXWtAmz24Peura/UsCBgOQHDOaBTys8+UjMpxlFMlv0YJtUBVRgQsBhQNbFr4LIZXli2bjTVFK1xP8VMXPbanZHsPjiIEw+fdeC6FDezhTz3PycLK+Ejl2pipgQbm89atmbfByE9A8k8UuGnczaaImYRSptcbVd4QDTwYFZaUZHf41eiJ86jhAxS0ndACBK9xTLptLGRcLLij2G13PZSaHxDj02jdaP3ISuIEDu7Xww1mn/w/7rJ+nAN+pDIseYEey7LjogETHjIMy5Xi7be/B+eADu6ZaQCy0QjFYPl67bdKDls2Od8IkJtjoDN59glrnJjsY5fJ7z6jEMnPTPF+MfLUEMJTjQojA1XC2fjwDRGKrDXj+c+mHulisk4h91UaYVnfF5YwGgan1B2KksKrHzpccPYpRDPsOvarVXa2QeQW92g+fpxRCaO0pDki90irhpDn2PDFuBY3Vi9PIbWDZzqz0CExVtH5oYP7jf3C+dWgcrQ0gZpykdg4hUFBVYllbfG2BVKhf0qCN43knpKZrWls2EtA+QRScci2N6GNR2ml7Rg8wZeVsEQTZL51AwEYL0x9v9uPy5t1rP/OAEG+VoboddZUlIpQvlRKtbjxy7PY5Tne0/B1rlAquTwUvwwdCOYwzFovKKX+SufJ46R1tpbPkxWfAyv6IdNwUaSrIvgBJlfO/CxprcGyQmxtmJQidkApeRfdzcAcOZJVOEQU8tBcB09t9YXynSjM74+0hIIYCz3DTONKppS9hgInUYpQoxfWreZjwUkXO3OQlwxl8dlxm3lAvSg9UQaUadPHBiA9V+qENXRFe7F+LOfUlRA/49lYvsyxvLb9IdalP/ql2/LgR07dM8J8rlkGhN4w==';const _IH='378fdb6b951a1ffbbadb3c20149ea4329d14f345421072a78e84ab601409a5eb';let _src;

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
