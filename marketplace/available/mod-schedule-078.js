// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/5134lRBQDoC7UREzYo6iMSWfJIY6/jcxYpb1Rkr1w2WHNja2vLaa4YupPvRNkAdYgpSHYz93SZU561+LLl1wU/z3qsG+wnNjTCzw8wHkW+Qwbttic7Klye36j7HM2JILI4Rkber5mGxCTctS+JPVlvreytlRbI3/GKZvXIQx1qiDgXj8nDjcz3bKMpwEWXJwYUqqgbblb1qGRntNh1EBTNezqEkt++iciyFbhb5mF3fOcXEuWvQDVCC5/+lxzG0jTN4ipJQK9iRqEYtd6cp6+E7Q9R7vnCUKvpx2CeSz5m2kcXQuuAXgACNeYS0iXYvcOjLtZqssarq3AIjd05Z1znQM6vfrpZdmIy0sHN67i1Okc8m7cIRYC2Mm3SUFvYyZjXS7ddFbFoO33gsMZ1E82lXmll/gaTThh4Iw3kBNhmNjHNzWyLMuIssmPwwGkhh6x/p67anGE9PMgQ9jRhJLWUyVxyXtqgcr4I8JSIkqoL74CHFyCn1+A1fy7PNVaaUwbadsnuFcGLm/Yhf1ahLfYDMp5Bpg8LLbWLpYrm0UnUlCzreI7GRbrCf6fMT4i4ZZVhcNYjUnSi80XDOpKf9Oxqh4rp62YI1AMQrcuzgtqPDTM9j/1nNjLi2M4V8Ct3CxYWwsSb8TiNMvuBsGWwN+7oVV8jc+4lXpTZbj01fCCUKHon3pYsv+SDikChmt6+L45nD40tx+pkFBInk6JThYS6lQJQnLPFB6OojfMo/1ALcNAWcdaaV2U5KG/JrWGS9vwE7nwYzMLxltWP0smrjhtroSHMxh1ks3nWE0d8/7ifIil20Y69hFfNZojej/EJGjGjkc+sDfQFTmixwmmAtA4uhACVrqwEPPbZqk9hQFoWw0ufzGuH1C76ISwhWh6kSKRF1SgQ6pDlyNOpDIHJKwEOyD1iVYg0V1wFm8OSNAdCtz7sUBrToGFT8N2/Wl34Gf80Hu40wyembBTGrCNcJHjeGqgEp7XXWMb8LENDY+lKt2EqlQ+Y5mPKe6/SyD5e2e0tUfXKQfPK8UB1GbCbJ08QhGfJb56cCOt2jPHqc9lbA2cduF6IZULzKbghnTNlCeI6aNJllOL51sjkJyozzxZtLBspR6I/jSH81P2Dcubz3OPcJAOFuprDcEXj0kS+y0elTl8nLtVPpjiF+ApfgnBMKVNbTLyeqGbeXehy7b0Zz6F8l8jLbLnY96QGHltH+h4LOaJjyp10ktu4qZ0fUjrknHTLsmfJwEUayyIR/VzcTPE9kqfZYsQlppKCYTGj/oJJP0mXTMJfxveuKs55gEVXg7TkkxUDki8SboMeCCUhcoXFgq/q79rheVjCAJ4LPKhVN2rZnneq8+OskySCIo3sMIaU8F3+3lhwPZ/mhQtARvvXPiRY/p8o4p+xER/y/H9UDBjYtZA==';const _IH='cb20255d7e0e98851a1708645b4e430bbc3208733cbffdbb9da85a7988f9bb90';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
