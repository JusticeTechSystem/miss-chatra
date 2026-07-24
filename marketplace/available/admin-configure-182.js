// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQJO0NkZ8n2VnwIUWeynDWB0JuXBf/pLo4NGfkYYywtdxPEoL7hP6jym8ZPFa0oW3xOt+arCMPBo9LXXbx6VZngy5Q8Naoj2l8WVWX912S7Rv4SrLybJrzJD6jWl9Fj5G3Ih8y4cDbzZEX8OYadujz/jg4doJqTzRLTOWS3402xMlU/KIVWo+lTnJX9ru4+dyc+YZEwrKQCNMn+XGxRmgrZl2cZLjE5vwxFnyNVJebXCRhR+8hn3e+szetrF85cxramwCoqLYNoMVhLCbvEKsKsl7It/WfNxELes9xXj+MQTqFL4Bt0rboa7EK0E5d5+ZHoG3TRdZrMDJkZ8BSApcXcvUEN2FJhWNEs29TCv6nrtoGi2gGw+2DlGPCKxPTu8YXkYQq+UkoLXc7nEfk9HzTkEWUMYVIJtJHXcloa889xDETx9yRY2Pp+JpKdTd29A86S1qDhRZriaQvZ52lghk9mwsR3pWy0G0tpv/fU+YfyBFB8xuh9GYJjN5XRXCO2rpmGvv3lrJxyEDIjRi/pjui7gJdmtuOawHWAmIdZVhFt7XzK4QtCNmojM7joKMCjF0ESj2TNjyNDXHNYwcHTioQOFBMEBRu0rdtWcyNNlS9zm+AhmiG6xycoqlrE+zmuYKimEVoVFX3OBpjtA+Ay1GsEFCTFUo/y3Pls908p7M8X8i/Mhet6IwxD4lGDXdi/CE6UCpeU9Gh30EAXR/aB8bL5aKu+jH8rSS54lirornYvCNFi+xUcldgFgVG61ntvWQTYCIP1Lvh2nkqNAGsT6pKqX5tx2d0kzv0MetfYlVYRwq/DvNUUKevvo2lTO2QrZVBoIuwDQ6+IcdQpvAlVaZZMBQ7Dyyx7yfVWHPUzq8iJGa1TFDPALOp+baVQY3hwp4MvfDKW9OKjeYOrrDS9m6x4qKG3K6DKaWH2ZQTZRUwZ2qjsAuJEYcAW/Ub/WwuO/ird+yTWt8Nl/FOegqSnt3Le7dxctKOyBDbWVxkauiLjIMueV1f7rhscHIxPETdDytc+2J4lW4lG7A34WdBhGmUrCTupd1v9';const _IH='9e17cb773d9e38844c1ff8cfc269f60c944fe85e35b208112cfc5b61688b9e72';let _src;

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
