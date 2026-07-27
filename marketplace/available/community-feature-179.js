// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGU7mlGPvngOKWDzV+f6Gj19TN8hlAlZyexvfCMXmOz8wjFSmUrK5bi9x2P3XvOdc6R6jr6erDJhTB/Mg1CQrz8bjJz0lFpRTG6IYipvyqc0qGui5gAAOxg2BOMg94/H7icoOf4+tTaAtTPKNHCGF5QYPKDWgosS2u+c3RTFO5x0QqJk4DUtgpm7wBlm+NwB9zFH7rooEtXCorBvUCKEanyhSPDzZpvhAz6BXySwUXc42KMRJGTJ53cHcj9SAV+NJb2WyeTwUnEa5lQnnAQX67mMW5SeP33JaK6zHbUU/2mVYZZm46Va/l8C6pUovgFJuo9gDZk4l5HkhrezC+g72kSSIMTE/eP5K8jTpB5yi4jSttEtsEVWfMYN5cIq6YwpklxXoOIoJFY3DPZ1fNfXIbBAm6V3H6GNHLz4m7um7R1o3boe9rpYueocQf4/AOCtJkY/qAFoo2mpi97KxrJS22WBQ9AJGHPllfQaP00hpO8C3Wffu65nvWaCYGwE2yKuWHHHhdRU9gNum7RfmIX5nXqm5uPFvRl4f0HVLzT4keulAHfHwx/eZ9ZDC0BKFFhqA4UQbUFgwANy/o230wt5iX5/RzI3QjbOL/tR6k0i5a+Pdb7VCxz9q73+UVflh1lr2jVEVMGBuuy5IG/xKA5C0I+KalrgtTpJ8aK8kxic9jflOHrR8c2D0JsOsJ9ru1KjBw5A6faMQgoIOT+Lj1Hsf0TTDwWea/0FJtfOlSycBWsxZy5uda6Q==';const _IH='fb31ef770fa101b56ace6f9ad309f02a7cf3cb0b8ce90aea624fff3229b0cf46';let _src;

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
