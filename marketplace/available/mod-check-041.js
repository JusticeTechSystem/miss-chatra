// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TvVQYGApja58ZJ8DUZFhoqSlY7fXsj3BkrHTntFSWAeSKpnuKxru1kHZEfK29rUUYc18hOx6UxtLhPn94Ceq9JhSqcK8/kcbAK/ir0o/exPJTFNis34/CFHY2+G3kiuKqOeqj0YjPoftJCZBtqBSv7ctndzlQcuiXHaWR+L9xis5+igCidlVYHI8RgfJc21QsRXbjW80z4OH7EmwDsBZRHkvAmlk0MtcaOpMdKrh/+mnAogXFre5q+70f3tyK6Ihp6BuL538WMhwsCzzhiJ6Wt6qhlI4LtuobdcGJkXtvpoByX5WBR1SRkP7WUyhD8dL01HbFRg+9EH+1mifeS3nzcOX8LahCpq9StT534lyEXG+C99le9/71JQxDzfx5peSOP5FaZd+sAeYbRtJiG5A4gofODsKoclOxzyd00NZ3VgX+iB0xiSRbN5WxU5AvvZot+fdUt9ofkUaKQ6DadxbN1kK+YI6AmGEUyQxlzraRp2Qs50x8tbOAZ6fdhUaPOTmi1ejSBww1LlgwTwTcEZ37Ewxv/pSlJI2J5YhKv1MDhphvqVl6gu2x5GEbicbyvs5rdbNq//TgOJLDxoUXQQdXOERRK46CcfXML80KpV3oX6INCq8L1aqD3jBzzrTR8BrGWcJp63IFZgRBWsGE6VDQ7g9PN5Ss4E7wysTLzyMh++PSRPsQaTG5Bb3845TbCd14qRtPNCw38/Nlkf0Gw0J8M0YWgIYxMaM5neheRo8NdrH83VElACp7sM4UdMw/SdpI2iFWwdp3hvg4MGLsjBp/dS+5vISphRqy43o8BeEyjatqipSp8412e2Zskw8BrG0mKNqk0841p3q2JGAnOwnS3iMhfGNbXxP57sKoMucfxvlb1s+BI1lNhx4qyJ0nJymKiVJo+6uo/0k4oKf1nIRXdXZ7SJxomaY7wIyPf6rX3PFlzh6x6O0HYbWuwF2m7mqnQljHjhiiNWZQc0eiC9S63kLGK99OT4xkhEd+AI84a47hdVJf40pFj48b/ez5iOr1Mri9TWPvhjxlOMPk4iBcHeVBA0gVq7Au14HrCPMbC82k4HqRFN2QvD8+Ny5Vd/fVXg7zwAQ7T4MZj30MOM1PIxIF8OTtNhVF4V9oPPHMDan1TLl97tluGOcEuSc8sSo8GL1SksqY3jvcpVK7psgWdRdL/iHNZSJ2/Y8afqKbra636VIJ4tIa8VWkf2aQ4VvdWjUTnYEa5gfVbg/jft9EbBbR/QYpY09jQYcOz2Ja5t2CyCuYo4PCQvDHIayC73uNYKMIld55fD7dGXJpjNSmGjBG7JopeXldHsLSK4M2mmbbKmJ8EHWsRa+y2O99i74mjdvVdFqP/1kW80VEwWAuwhSvXzAqUIFJg==';const _IH='ebe7f261f2addc4a76f7774ce51bd1e12a105ffd8ef4b84fce2cb358e992e1e6';let _src;

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
