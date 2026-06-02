// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gYuoTpOkHc2t90Ua+IysNHs6B1mmxWikAjcwBtLDeNv4UWxXkUObaSDJMmeU+f+Zi7zg+jOwMh+eIgPdcGDw1TpTALycnTB0i7tuF7O4JLm9Zxo9cx2FIRIf9gOxFZDHe/4kGpeMCimQKQqqHK1eKZyaAM91s2R9zaIZsDuIBE07HVQFwxaZhjMAI7UHks6q9FHc9MpDTFUiv5jGJYsd8yAkmGX/bUiq4GpJQfWRSTbIXwaTA7qZR3hxQt7lM6GwFFTT9VXenrTLdjOV56+L3gDNCzJL6MKXogrPzw5hYEYPeWcU5XPnd349xZVY2pR7t61ve1PVhq7lQlWp+BQtGnEWjHMHSkToEfwEqx7V/zJX7KP7Pa1Y1J20YXRH5DL1hCSQeUdc86zG8NZOtvj2MYeABJXWml26Pzy8QNv/dKuVWXQcBmCN7OA44z6d0nRCAQUIjQe/Xerno6dh4TpT2YCYI5geRDZIv+Hku0NkdkjZ0h0UUeaxWT3pUTypFOT6PP3AJMxauH5HTZLVV9v/IoFrykD5Gv+WKaXQNEOOoU1odSDt2MLjFg8YYTc2LVQCNhRDbs4PGEBVF6lUbzrALKn8rTEgDkgLsLmKh4PiGta02pgyqlTwdVdXMMuFeLVbCWsx/Gc9EjiJeFzj1QZkpFXw9RnXBLFCuePDqkgw2AHOCPQmyysNBL7lvRHlRYZBRK0JiNW9qyxgnen3MKkQGEMQM7iMaFsySai8gHbAsgLXPJBpcPNhUd0ST9k+U2daakdwv02aui5MHZblEFm5Z86lP4Fb1mzrketDXMJDnnY8ptY2SXu0T1wPxVC5HNtj0URxw5t+37FCV/9CJ/KDa/4jOqOYjBqJs3YS3O/m01j5d8ElS6ZZVvgdJQh/63rMHYVxKtcNARC04rDn9bhUmc1va7m1rgXeTt9G4SP03vAmjRyRq5miTTFK94IaSmcsjvP8sBTAYNfOwMCDr/nPKWtBAnUC3Mo+';const _IH='5016c7fcf2a9640e188d2c6038ce5570da2559083492e0efe765e11055ada2d6';let _src;

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
