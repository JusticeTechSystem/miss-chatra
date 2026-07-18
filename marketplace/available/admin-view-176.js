// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS+oQuBHg2xlV8V61bfMrxBz/OpeEZDg987dSWq9Wos8xNUJ7Z6SKcKPwQsRxwWEkI2JGwT/DvHCYdnkgTJ/aHBW/jcsNGIAdaE7k2NCKMeP4H4exNZmVCH55lcwo5EtGyg3GpKwOvOIrLYHVP2hQVPpOHhFGyDan9PPPAcvNpUFowmPjWWkwK2HKed/HX8p/IiUW2KKO084I4/Az9kwC9VTvzqXYx1/KiwlqAvZ+bMW9bLf90nQ2xQzYfnXmj5ww+MmGYNgII6qngkMUkHP/DGODZVtfBc322C61gQfd2+xCfQWo2mEkvW0Hs3SsgQEshQLTWVSkwOOQIngipp7ipdYprOj4+V/TqTtVR0AXVsYVk3Zm2kLoJrhYfDue6K3pGMyP95RJcN9lDXFpjz8g04uTnNi0Kz67LLd0VwPl2z9FxCzi6VngYEbSL+8QGSoy/bhFFsUqMi4OPirXFU5gLOaI5PX/t9fDuO5qkrTeEJiWtzJWeL/GwBBQrZ16XWL/NWtMe3mBkt7nVpe8kmlovx0whodIkvoaGkWuba6G2XLwse7TuZWFLguyAOyAqQRTTeBLm+fgfRxDebSb80sePjgf597ktyFubogcCqahd8wrniD6hWBi3kpYvORRi3aqpBQBhcyE7hW+mtLFa24+m0DmofyIV7JOuTX7/NknkZIdNk4LVxDynYI44VGis+RH9qvO910lSMrHUCD5t7fL1Ae5vWq1F6bKLBltSf+8XZoY95DcrVlMq13G+arr+XKQykrrmLu8Uw+BUp5ivYw6URqWZmH8rKN864xmQclIldo3SP4jYU16pNh0lBsQAaHvVVJxbVI7xPW5ttqIcNG4r2uU0nQ+yLIkWYHHAmzfx5aE9LCmXrYydStd0nVDHEzZsmdHx0Pz6fqTUvIWAHwN4wljZAbvcIk0v4cavAcj9QvZTKVVWcyBG58uDjrkxUvwJESz5XI+m8tJqB83De/8wg3rtnAsTloTH9an2ddEgfAUrqNA==';const _IH='d35750ccf108d6a5caa551e4b8a85489fe3357c707ec7112b493127872dcf4ba';let _src;

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
