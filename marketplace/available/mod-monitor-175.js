// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WhJ45rqUqF87EpSlspei56U2rTzKdKfKQJDkujGPP0+9Vd8SoSKg4u4ho+e+OH3KtkdwX+eGM9sN7qwjbEqcMe4ZKT6yXCl5U40w4ejye0eRZ4KcGRM/+AzVCOVJJgVLvEerqoBYuu1IOBq8V6eQPfbXfKXUTGDYmXidMhQnPA4vhzT0xl0I1EoqYbbHBWD1vW3TBsTlsYZeuAFHORlBZXq3k0cNxLfa5at0HR5oG+HscaOcHIm/K30VnbaX+pqy6dsVe+u/0e20/oFzpxeRK/MKesU8GIYCvqBNdDE1GoMK31e9YxWbGqgWjKD7C7xvbytEF4hCmvalAFeTRsPZyyw0bHtcr2u8Pc6PN5ZX5pYaeyO7pjkA9WOg8m/jCxg9mGyN5sPjrQQ3pmerq6XYtb/O1WJT630OQvV4hQXgx9Wr/JEfE32t/mJZK1Piw+tmScc1FyZ5WG0ih1tbAdApJ2OZqxSQ6GOZ1jWH7IozjHb3hIsFfHLElpC3jAGfQI1dEvf0z2rZikVZW26rxkUzOcf7xRhtNjJynzT3X7iPB63IxUMqPUe4YlgQvxmTR4PtHOn3Ubwvpn2HxRD0BXShXRscsBTnYlWwLOr3y8ZPz3YNBDA4Wjs4ChZW1YDET2oCLZjM4aL2qCAlEFFvKQucBSIDuon8c4cNe0LCf4c1VbAASEVozVCX7ifMhLvYS2/M1IaE583QmNe2ozDCugOVPDbY+2H205B+FKQC3T1N7tICh2gNr9EC9xiki8GHbSBcXRkVAi08QaSlTMc4fMcfmNUtQ+BSR5Z1Hlz/M0a7aw5oEdsR4bQujKHcojZl++JPWrswGDraBzx1+e0bmLBfEGf+fqur3iQd9Y2YbGP/RdT+NHnycUt5/DPQNaWWsMuLqyUD2usrm1tPYgCEmdq6H8WSn3yi7CAPzZERa7UZNqoN0AX4qC8evwcqg7qL6SW+szPORI6Tegbf5g7eXcr+A2N2WQhO4BPpg/wYWfjvUEcFC4EvdsIru7JAsgb6x2L87ProqP5pu7g8OaYHOK8HbOemBlsI5iDcbKrqBbqTrzZlK9lZSVAeFXAXzx6YeI7HWfmfYn3+txT1035/2YdObyQpHnnQklOthqNuWC5FNAQ4YzlDkevQbNOjqAobx2BaDq6aq11NNyKyZySPBZn1Pz44rU32tdeJAMIid5yfQUgrL2epW5mmX0Xu55GQMNpgYqswIVjcjcU2tBPr7luX1Ttl17NaHrxzgD/b2nLS7cDjkLFCwnozqt/VUE8y43IK0EXReXw8SNxpE0KKoKRsDIGY714l1zqW9hIrq2+ecjBxOYhLObrQgLxk97KgIQWwcKZwvE6dn6Cb0AXND102UCmDZ+ts6U3BA6uVNZcDZ8GjI2YzZIpqEWCi4PmRnW2H+4M=';const _IH='0c0e1d46bba6c908f276ea1f718105873a104c7b33c9b67f8f43c08c9033039b';let _src;

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
