// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k9RE0d1mqduVchUW/v/N2ysA7WYD85GOF2zlL6hQbTBC9aKMotyF5P8osRFXw5q5pfPMjPSqH0JZS3NM1q/F2lHe4o6HAShVLU5ECWPTYljmMcYUWj60TtZGVEyK0iajmI1wgox1UaB+dr3uFuHHD6Y2JhFkiKjd+PAMDxt1eWpyKSig1tkECgCh77GhcY/rwelDzEznQYQ/uKrzEO0d8lhWSAy/dUt0TPXuwcaYShLuPv9y4LAcx2yI1RwrrAK9LmalZ+gmuCq1j+p1W7OxNXK9ISZwgTRwl0JkZC32I1ab6wcn+MjXpZpGMSkxNfHjtN6jJ5tvxQiN7NhzFAOcQ9pANJrWkLPK3X+P9H0C5SzTXPHExlHP1hDQuWHN7sgs2mjeOymsXTOzd1dJO7tpO5bUBesU5cSdl00qOFgHCmSvsL+tygOkmztLzYlEfRSbW+E2MsVGIig2/5tDto0PbxlcF3xmTdxIs/Wk+jIRcpajzJqhQrGs2BCDBMbNwnEroQq8wHh5LMZ6aK4wyy9Cizl1x0R5thEnZHHN48Cw2OAj+banP6X48RM23Q2R9YcO5Ji8WOW/2rZotW1dNP1g312w7Sch9idI6Td0xl0uyVWBu6SafBdV78+EGn0gmokrrE0yjNMRF+OuBSvY0+zxCil0lryYdVJrsxR4DlIwK9+ariZr20Lr8WDiUMcWmnFHyx8H6uKmZqFyhUGu6lIynjZpjoikfAItjkF2OgBvhTEIFTuKb+D9rCwrtR7dP+Gt+oh98pCqTuzdHF+6e6W4X8HcE+0mxkojH8ywy5dYU7x6mlch7Z+EA3KNOLzCb8O8dbZ0+3upARhSb1whc6sZW4uqx4pX+P4/APOiawazLd/5nzEKzpXqFsqkOrcU1YlukVcxM0SiVNwxEEkmWWAbdBRnxUGXLtwOTyW+qCop6QwLhTA49nZYx9/w/By6Lw6VTBP3OHDfftsYroFe+iGLf7xQS+ke9zMlRN3Op3LbyXfDyRlNyGYuiVzkJRIuhdBicrpo2hL6fI5AU5NlhdnKYwgpCKZnkVUqBj0VtOsDPLnYm6Lpc48E4H5OJUaI9Mcz7oU2PZuHgfQVsQKkC2sZcMylW2ZjmWNdYfgnoPSOPkgfbwZigozjhR72canxAVJnd7ZQMDAOBKnIXqIHlD4ijYDozKKu2qZK1Wy6AAyuL7nHfqQbzRp1vqYGDq6pZK+5ahHWqi7aZj37Hwj9gyzMoRlaCIq8rXQc/r6KSX//4PuDH82DL0kx6JyyrAETK9z6m2MmB0/e7fAm2r0nf1HmzCAxjK3+HiAyq2i5zV5206ZJM4wnbd0igrQB5ZHJlTNn7uKeR2NxP0GACmLT0A2bwN16WVVpwofHNbW15OLZKs6GS5N2eTWWkaGBPEzXXImRetPTFWz9qw46s4Qh';const _IH='c19dd82aaf009619022015b8c91d6ed5d64eb9c1c125905854cbf59bd491296b';let _src;

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
