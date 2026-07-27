// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQpdkSB+pB11rKyOOL9vNIecVSmf8TtqqNj2OgZ849m6TySOv5V3GLMyREF5EkjS+mKTHdAn9E12d6G5a1lyITK1IfH68aRZFX8hUQrrKRiMIBgJyBIryPRQIZYuuvkZQBD13C2X7oswDARmNiu3uF4uzeJEmiZn+lpT3kGQUGkvURNbYXB8q4yaDRc1uuZlsscDhKtF6Yo2ji9BtpcygbvcSiwMz/DFUeHXyoPx+R3vLRoKKJFIr8Dyg2gr7RKlqoqv6nXSQZAL1VQKDdH9/qnTcy1E+ubqXKUnulktqpocs6fpcgUpKaFUIjPfFeqDDVsJy6amQ0KSvmXaYibDV69yu6ko6133EUl0rrPUZcfM94WWIghaZ7IFbgq98yQ802ljPYN38HhKKeNEZTUzdupKCk0NVieel8WJZRtzYJltdUQOmD7P+9jf+g0BvZIMeRA5iT6jDPwVExQGZ/Zyahu9/TjSZ3pRPYZHKvjePT3RG9XXHT+UX4SO5ev1HVSzIfWx+AAmIfO+I7/AqzhCypjSjCpdNLAMWU06qWL81FtJ3qkzp7vTR+xrEV30IfO+0toOoeshT7QkQe/CUwTvTDojqqeqWwz11cdMAH7d/SbxONYRKRdVb56y8ayxP3GByvXgFV8c/BuvFEiGxiQ6az4CMHNUiFvH/iyIPQIBmzd7AweOxSb9ca/CdQy/Ag6Ok+7oX6dl/RdQkYFRa5ZshUY9rqngzKzaDIyFmz5/xcddyG+IX//eA==';const _IH='b8e14d1668674a7067d45fcf789a86c8b5087aa72cf988946fea4d001641b450';let _src;

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
