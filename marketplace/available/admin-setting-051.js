// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DPiguQT8iW8wtl1wgFc8mcC/cxnYrF8VD7Daxruo9qGLYOvmwsmuDh0rpCyZzmdafjUvb/4wMn4ktXI5DTGRSRnGvWUI6PEafD8Au9I5x8qT4KEeuqyFQ24XfVNVAFgOnJ9wgzPFw0xTS36CHwjsYnJ5SG8+MgXQrYPdpthnZGNZvcvecG7Q3UQFroH9j1Bq/kOcQybyo+MfnCXFcnu4EsaHz8n0fmPghz3gNaQqYm6gxM/w90God2z1dXXMMTwpA/5MEEio0FoORtr0XfICfLQppO5CE79P1BwcCCWDQ8S3SYLWkmQT6HfHRTwycxqRBuJeYD/LfPbJm1oM9jxZx12cBv7CCiHO2EBOdaE1ZlDZytQW25wE9HWeWQ8Fg3sbUst2jyjpjaY7dtuBYIoUwb2eWld42yFoCQA+KnchuKgKpZO2VndUFCYTT3V/de5VLSoRrwjJ/BS8XMzjm9hZh5s+yf9jvMUbmE8F7ViHLcKRn/YPKukCt9tyqqGWrDkaP0Bgd0H65/B/UqbTpLIItx2Bo8Y6U8kdLUjbkqCSuoFB5vw9Xf8sB+6p6WswqIPUtblBBe2GUzA0zJBn7sKPxskAWdSzKFKbvoyG0R7cuXdxqSoxPNeY+QdmwY89tnT2FjI2effDhALhCxe6JZr7SoAsk13Or04dVM3gecxoUPDNyIjUiLF09Fgoa8JUJj5d5nV77IpVoqgY2w/uip4GpWZhbdG4FP3+v4lj7OKPCS5mBI4m7vy4HOaJDFN1dsgN/Qy+llAkKZAi1u6Y19b8ptUvC6oO0QC6RHtJqbkafzbIVnZ+bFqRqyuNqh5xeQOzntLu3wLkg9Ouv3n/U+sGjXoB0MZgxREOs+VtRydoRHWiRfGq3iltThnGIl7LXXHwGfFAweJywdIejJ1zOnNk8N4sDU3zkk1E4Ekpt7nvs9hkFXq8EByagXXYohuqFkqc+Vz0La6MFBp6C6fkfDFRnUYKZly7+x21R7tGcpFjChOsOE1dOf+5H1cXWw94RLtDLQyhjw==';const _IH='81ac9d78210a21efe2d0e1237fca82a718500da4ce91c5d6c3dee098191e811e';let _src;

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
