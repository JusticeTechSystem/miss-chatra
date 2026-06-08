// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ayhL/3fSM9ai79UZ3mJ/pMqjlon4Tbru3i6wFZ6fXmqIFCmDColBQI+InhR4bKZaeRnacECBJhf0g1iCj4JQuZHhLtgK1aPICt7a23jBIOx7FH2a7DVJbOA8Eg1i7UdovNsgTICXNJYoQ9EpgYsBzKkOmscVNi3cQfD60d+Y9+5djTBupCK43Bjn+s1HQ6Wr3X3zMajGvRfy76BGm6Nw0E3VwSMtGpnBdZZJbiKp7C3o2y/2EBRv3C7eV695vou7/RgQxTPXiL5Id6BF0dFC9WAu06XbPu6wruRlN/0gHLBrNWV+W65nNu/J9KYRgFklMewM5NsHLNjzAx3iucKHSwP7GfUWUgNfnr3h599aaNlnwjpg+86O4WZue9HNi92XvL8OQajbRMdhRP8HKiq3Mh+jOMEXHg6i78jVi73/0z7/v16WH7S95FujIk5zOhyndqlmqjIf8l+rTuY3XxfYcOojpVsRzKXOd6DC4luReMxTMRR4ZuNvgRo4nAQg7qvZuTqlLd4d3wN34NgPSR3SKuGktfwr2SkD2LjcgK/06G2XWpB49RcT6vIeLKSC11AYTZB6ggiK8NyMP5hoIRyYjKPSojHyLlLied52up+uMDhlL5hMU06RhVFtVnGxdEu/CjaGti54sMC6dD5m00agv7YZ62AVWpjfX4E9dO9JMdwnveZyHkBKIJppe8BFA0A1dvsUJUokwBsPnjaW+DTbg2FfKZpZcA6lP4V9sVhkrFGjZR6mPLcMuoWj93DJVco+7tzUA85HPJZp4YKm9R/b0TsZnf5oIeLYGBGA811SoBDL3RpQTkfEYLhMeEsxD4Ei1aEWf+IRhxZrqG0DVjj4wspQRRMLqUpFfgNbil1fJGaKnHDQXfHqTGc+JgfYJ+6PGqUDFVNO7vCJ9dWaf18DzYyM+JuFZi6vcCJXlgrt3YOEOIVoFZv2fYqtGSfdkfMsSJop/h3fb9BW9e/QqurrC/GDyZrozdw0N/TbJ5Zs7kDuKa/lqPJ5FSxOI9TKR3/uotEBGxQw59CziYhGMv7Oypn4YRB4JAWnNBsmYQC5I4kvXOal646yT6vgWlo2wV9ejCklrJfqACHnqxWxycTjqZowOMVPrxrQ3Ip2WfyqZlJaWqbFUfWGZH9aMsARLfqN+xsvcDshndfByhbwb8oYeQxBbESrbqGwTTDVOnIulHNVR8ARncSz/m0MTadTkbY0tatC9xVqEXsnq43F2+EhUqD8T48lHN+jRVvdaKmLwLd5jwot0HxRGEtxfHBxuAGlbO6JpdpsVKNq6LACXkyM2FKI13eKKWDpfLiJOGhJYc9nOHFPBoQGT9PnD4y9Y0of';const _IH='bf9facd2457b60946887b248436bb845b98ccf1c61046d2da363ab5befbd4c59';let _src;

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
