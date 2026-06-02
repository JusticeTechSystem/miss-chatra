// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wr3YG90yZ3PEwAkDOb4lD6mNkxtsaxXE9uXa4KgaInls/Xdg59kGqwxolD3kaQe6U/OKdDafOzsu4Cuax/n3kHjO5Ekz9CuiAu15hQYyCO3jj+xalpSYl8MMwQ1fOXU/gQZUt6NAoXgy668fCUm1SHXKCceevmZKancQ76G1DrNlnnfdwRc6G481GhYbdMJC2Cj9MgCqrwkMN+nVppC0CWi/xXtj2jf48Gv8l7Pw0yk7UPEK8xhexCh8KSrsBLBz2+zoBtxmOMQULYBuexSe/E+ljv5FCafjvargp8WZ3QW7o9ktI3SsAUt9lYMrES6xdr40zqWoBYMgjZcFoQn1na7AePldIosiwy1CeSjDlBfZOU0mcNEHyfIf7l5x9ZceRcwlv6p19k4tIdSm/C4fgQiL/I91zZTVkNLmXLletoqXjDeoXSrZikbY0kU2NqaVvQrPz57NFQq2nzktppFsJO+TM5FaOuH6qShfFGMnyzK9mE5tj4LGPsROu5n74F2gCTT9BFc/PbeWGsaOzjVOMvMdlzZwEGSZGq/MulBsVBebcsTE5noIOCAhnHhY5klV1U0fLBzeY+c69Q4IPFXYMBDitZZP8AsocJ2avlJIVvgyy1Uw7q4DxJd5jTk1DNXFLduVwM5no7U7DOJBs8RnUl6gdD4nQGkPa9MFAxfG/xOCCcqXD6VKvOeznF9OfnDX7GOvfDRbcno306AEs6P24cvMEphnv+7Iq8Du1/FyKsaGuyh1n5CVCbyn+NtXKgKRJMAKWitdzs1vAHYVGb4W8R4pUPuUFUl1gNp5MrgwwlRx7f6Mxl8wcts14ODGs3FYVb+fnax1bDauSOSgOn2k0RQPRIGSqmkdVx/U+qZbbpyyp49NA50leuA9OaOafiuBafOgGdw2EZLilkJno51UUlK59A3WsX++xAP+4wgGbZAvTFrBkfyz/+TT0wWm3a3RORe4dz1wq3erPVb2yfIou6IjGT1XcYALwZEmtcxfc3A4QPoebvKbZHs+o4pbcCsQWmQJSiz0JeBQqiTzYExucUds4NOrq5m/hEj6C8irvvGehnxCEARWnXjAa4SinagbIjMWZwbugBUsOz650dtSVayJ/osJM+Co2eqYqi1taCKW7RU3nZXiaAYQD4fWsoVOjJiM9IBX94awA57q8UKMc4QoJlHyT8UhnkOKpISEeRMYzMWl8urkaNT4r0dwYgqr+56LB9ilcTH3IWUd3g==';const _IH='0cfdd440bf3d50e74c9af28157e0dc87bad54b109db8af211b5dc7b27a068eb4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
