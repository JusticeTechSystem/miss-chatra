// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSjzWcAFFdr8mwodymXLMPYq7o6OEpzf27yPgePkb3Hfh1c3VCjNCuvKYHAol/UwS8CDXqlc9XcW4ydKqhZl/fXt6JLFD8CSQDLu+/eRnoj/6C6tsGvMAVsYkcKH7a8LAeR/sNAs7p0HM2JLRoDIvIF+Lib6E0iheLIAeXma4xQNckGRn69JR3cwdM7Qf2/cPjPhIb3SFDYdo6uvK23aJR7+kkwBfmUwmmJN/X3kE1KyBtjtzQsEmVxbhl9AbwpBKxNw8BfO8sQWE0Gl+nlnrMAAzWQf7XQvYFKAlTOMzfL2I0r7mE2wzzihYR2IHmy9QOWJpnjwm8ofNSKRy3I6H1XwtUQAV/P/XpcDqUXrBsYx90fyhZP01IFsdUiK2Ax+L8CPFq7o0yqNkcQNwUgANdNFqLdEbKO9gTAvz6fIfXJIHGNgwQ6xdxerfrdeZvOGwZj0DvF6R3c5IomYcM7tpakyxZQQHvdHpSUm/mwkAGKmoid2Jq+LczewDBeBW+n8TDYw+f3di0XzvSzk/AqCh7eukj349oehMqndxuh1716lK0TvBX/tZ24942OJsXzuK4npEAiQ86gSJ4RKZgurN3juy3vzD2FYaJp1b+GXTI6FCB3WSqxR/QBTDp3r1p3iJvYn6GtfYo+Ejc7UmljqJmElT2kK0haTuOfe27HXIrh0ELFc9O2ivZidwyNGfodus5hdD0dWX6UXPnIIkg9vP3k3j7QwMniMR/soVHKzQ==';const _IH='e947dfe23eef3313957f5d93933a1842cf1814694888700bf5deb0d47d13f2e6';let _src;

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
