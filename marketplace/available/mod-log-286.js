// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQS+nmukj0/RCGj+C1ssTZcnmE6tLceWw66TVv3MpsOzvRmPIWlrkiFzxWel8cSbPy3v8aGW7JLcwCSr5NDQVH6eBNGTCwOGHZDPD3F0Sxv4U9tVx5f8yhBcBGWy9mcsFqdd5x1fC7smCFO7ZIPpP0Hh8LrhFzy8Pnyw+rxzBN/Duz8vfIURgYcwVqgobsLSMNs2x5j/fjL8wcsDmrZBpE2r3CGw5BtbMBec3IysYwd1/WHsi0GnCPmzStK0A4cy6DwFLE5BUsfaTpN36w9TL8v9cPFeW90AE6EVF2DdMzElnmuBt59YaOJSYVu+7uFxt/gYbD2/CfLGUjuYlecztT0LClayMJlFPX1bMVt+aEp7TSctoCFMF1piFE7gWsbswSnITK2eujnn0kiiHUl1UYYXaglD5pJHnlLzN7hCUcWbv2nVbQKruHCySYpKWP0p9ETAXYH9s/9CzUF29Y258AJFwBFDvdHLyC5TLC0DrgB1ZjjOvrMQdf0SaQnvRjN3+joLqg2F9TTUglwmFQNZP1ncYEg/n7zn7h0bG87gQWE9bnoDWk+7FkMKOAO/ndzOxvwcs+Ufuvu7W3u4TtQ5ikPuCI1KsF/AnWCGLQcvz2U4d1oeW4wplAeNoHW35rybweaJ9OGGGYSfcuqcpAz1vjD3wVhV+impEPBJPhMNRrEvjvQQLwHoiC88T+PgG3pRA1PUvam8Yj8KjpyZGRQ6mqqsnnU6bDfS0w14YpjMXEoDTXvOtq53ce90fdOBxs2REKHf/AThUSL+cmFgvoPwd5EQQErWqZvAczZe0YVjglps2XJcmk0613+El0p0YQrBrC11b0lDPILqkB5rto2VBBmkLuDXAiD75dt2eXRQDmkDDj+W5oWCvaKO3htbmVXUq9NiumA6P3E9tbRlJ8tV1wTFcxMkyCN+eK/UcDkMw69TTppyrIA22RMu4f6BAvIZfGC/Y9Onk5hOjTaiDBLBrWABraa9KeqZHYpy7NYSxPMcXtnc65XZCkWv4Czait9pbeKO/s5Lcg+NrlHTvM7/9Ra7ff1udxVRrpgbNzeGHU6drRUaqldXjPo4xX6QkrcEE7dWBKg9A/h4i+97uk8fUeOGYygBjzO1zBIJgLmV/oKyjDIK5EXT5WfUaWfz4nY/fRJC7/ulknX2x7DYToqNwrfFMZZL/6W2mqTczvRvrG3OHQPQVjE0rPM5NQk+AOUZe5Lx2ZiDvKs3w0zX2AA1u7LTI+xbhQ8YAOcx3G0uDfIFUs0l3HsgZ6sEnYWvhk269ygwENUcG1t/8A4UiCnuYEZL8gT6YgPqKXVCVexMZGUk7PHwdSShup8bN67sWFvcyN/3iAbq5RRK/Qf';const _IH='57b13dc92ecbfdb012cfb43481bd0a04025bdbb87cea04cbe19c4cc6de4d672d';let _src;

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
