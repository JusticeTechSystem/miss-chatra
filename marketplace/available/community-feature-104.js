// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSkkMEjzz+KB6bbGcgnkpZSQTqO9yVMc6EQcI9lAFrKu5c82TQj+AAn6BZR6oxw4Cjzz0k8nW2KJrqRVjq4F/uXOCe6U/nNTNFRQx3uR6H20F+gHRA915FUtW/99my6meAxB8/6I3JSotwmuQWvANcxLlE63mzfTsw6UDdTynoWtjBFtpGwQ3jQD1pC0JrqYRsIIVO20hRffbqKiteKixuDa9WOKUZ5jUSRnQZxU9WnhLNlX/UArx327ECSEc9xhFGXyuRleakl8pTYQ70miwY8QfnFpGwbh0PQdCTX7vJjOuK0uSvbfWax9B8Nzf7XtzNgTWT2juoS9AEstJxCsPdLobNtfnJYLnw2gXnNqILCLVfCmhSq9g2s/4P+S+ph2IdH5iQR+e3yuJ1j183ujrzBtulXq5TLnY78/xWoMHlGK9g9no11apmYwrCwwkpqY6zdx3GujubFXnwN79lbM7xd/+pKLyllZp83oB1C5yC0Os4w1VlDy+fsRRIFLdC6qlyXKeXN0njnZz1QXO4AgdT84i/VeeeLkX2QCLZX0UTKGYchhetFBUXHuh/h0PwdUGEVf94CBNZ7TuBpH2VOzznL/78T3DhgbjUvKD7IPJnxMKBD/cba53mV7VUvEpq9JBC300Sj4GaZ/Y+d3WdOiBNH68iB5S0rPpeXpG1lb+JcwKl6GFGGQe80uUlcKDGI/HwR5THTbqQ3QE+IrDKiLMqRvfw2tCYAW+PozfPBq5KNcxk4';const _IH='b177790f39c1c9ba1387b206b86016ee63a83de071e3466a095bffa60caf2493';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
