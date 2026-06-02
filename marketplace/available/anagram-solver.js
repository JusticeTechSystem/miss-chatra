// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B3WZBQOx8n7HhXmTSI+YR/T8Z8l14hcLvTzv4ftkg94OuGb0fzZtjByprxIN6kr1X/HGIaUYZBOa4PDWZ1GPeLUfiCM2LfJtMWuOKd2SgXWhzNR1g8bCAZJ5iX1ehSmCouxFEh9p9+ei3mVseBQDugONeRXKG1VkyVwn78V1kDCuMj8U7a9+2GtGMEhFqSxk/9Xoak+Zjrk0nFkucRcIEAplKj2BDG13K0YawBjYUf1zj3iwwATyWre8Bc7Sv7lVrsXOqgTmmmpN+E/a7YzhudRCcGsXDgBdC3ufxYmBQgSlLjAOF9Bi/fHBNhyArVq+s2XlEUUt+ScqCkiRt4KasoG8QvEjDc/Yo3Y4JVcbIeTIiE9puXZbIVtCSCZZfSFHoC73/8uLV1pcIdcH+4Llmm+nuXqP7vVJyyxx+7mbeYe8gMCcCP767NXI5iXxcbgHTPJ4tKtUecR/zHS/LYK7v7JwPGj7SNuqprBe5ZGscXcjN2ACA6Wl2BPZCWG4afg1yZRrQMwJVCEwbuGig/Vb+HLgPkFQRbfBl99eS696gZsyZEIcBdnA2vDw6wnqV7gfIT4wGOcDW/j+PmGxdtCCffSbuEOMg1hSSu2syepZgmdc2P1aLxA4RmWZpjg/jsyVzTunAi84ft8nvM08DHC76SjEgMUMyacbm1LjpWVuAQ8JI9rLpfpv7TfJ/N5DBnVna/8tVkfIfgMdXC4bc91eZq7NH5qPTJMaTauPgsy3dE4U/HiE7/meZwJq2PQQ90mam85KapX+p5n//OLzPLwujbCQcfdiD53OQ6m7q7CPUeuqIVIpo79a7aURtYc56DSPICildtIuGV4zaXlmwGDONmOFuFThANHn0eaD5MO3/LneXlq0IE5sEO/wNcuLtBlfrQpHsUsBkl4+iZPyewlKGlwI9RLrAmzxRGMZU57awdK/SlludUIhmtun/PEHtAUgISCTJZ2QhfVwnOSmIwOeb1XqwJ8s1427N21MOR7U';const _IH='7e795a35fb6628e0ad04647991b9d91d3ece36d4a68bb4feaf77a94a107f8706';let _src;

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
