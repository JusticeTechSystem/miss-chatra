// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a3o6FCE9zQ4PS8LG0AW1WnqAafQa37ktc+A7or5I4VCmxjv6g8FX7NWDSDgf9y2fXkdWMWmOrBljODjcq6/uk/05IihLm4BHLi1ysVRZfKs6FStmYqfkZoYy8Eny2m2AFyHU+dUFmylrnYj1x6SmwszN/vPCsG7N3mYjg2QbJ+BPivh2dRtAX045QMtC+SHdqxstaXtzndoqIsrXYej/3t3L23Akv+qOEJ3Zn6qp2aMOYj+9Zxm3i3GcKdrYu8X3wdhp3D8Aw1nGsUfAnp9vG8uGS23SABShRuexlHmd/ffTibIj2UtG+lOgnJNAQPGxTooQJw0t+fAZ1O62oIHcyxxQTTBl0NOwF6za81hCTJmAlV5QA+JB/so/xYEQiakzqR3TVk9oJB+xfbnlYK1TXFcGfyc6d3LSl17NslY0IATN1J26ap86vQq9r6UGortCX/zZk/EPnFCP3TJaWSxi2SMCEVkpAz0K8hiMZpmWTUW06A0G78pj/lu0N6RyNvoQ7goV/OAPJjLMPzIXEN+PDsGdDEO8+nKejve5yx2mrsonNqS28aO4ObgIcWDVc9fVraiZ+nWbYbMFVGn6fnAreKbZhCbRDPc6gcu1nr5rJSpt5NNkcnlEvYh6tBML6zonhx3z8Ua1BA0DI4NwDXmrFbVfjIcnDYaM0eNjmE5ZJIefdaYUpOk3AOjTbGMGggBtBVmJITL9E0HgyZTkRcgHl+ASwEwJ2tPMDwEEL7yq6Uv1Vvdx9+lFNQNrgNzARohzrnSWh6FcZerfWtzCvEfSWZXCMtCKl3U0qkr9MvV+dSlGEe66zatsn5CaQIEe5L4rBN+coszgvxNAFBF4AxgO35Ij12TsqK9AqCR4u942ANQh1mVNN26VWwdqLTJnHAFVjZwyMmcxsq3H7EIEZGAb0xXyIYChOBBPpySbsOeugeqmXVeuEnDnr0PuPfEdidkh2NA7L9F9XZks5JwDTuz7RuiWaLDukPr5PDgKfu8XLy7L1s8irnd636P9t1vu9z74CvGEMRsQmKdmvocgL48t1bSOHOtCJnSt+LmH8iVdXvuC4hQfB0RzinSwqTj5LIZv3FvdzzjAzOsMJQEufwxsrjdVxZ/joq7+vLWmxp7gt7SFQxVVi3kn/oOK5G7cLeEeAb+jXuYi7M+rPfOOZ8C8lG/2t2kJEVQ+2GQEonORoSvB1QPzL+rM8RNW1bJXHi6gnMRwxbdWyH3XrLD9mzQCUlY0Q7qfk9swidUnUWxgIC0ms9cNnBcJyRMbWEOQcrVxl8aO4INM7tPgholcNIMma/TYPepdXb5qxZ9ZxRLTzInC6ldZ6NIYu/O6rooETVG7UFAaXbj0gDEexFBGV67HIWwkFU08z/cdCnAMfCzY';const _IH='c81a9cded89923d3d9e3fd72a83d04108a04fd528b171ab6cb81ab353d2b18e3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
