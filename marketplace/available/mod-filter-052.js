// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3nz+pCfh1z2aFT5kKYOn7k2D4Es4+ZoQ544LVQcAW/1/VDKzvGjJS5qyi02hybAm7hj3gxOcjf6D+6u8NO/zfSjjYAOUjrMqaHZNOgq+DzRq+pQ7eD05PucBGylWqHPwt7+2wpUdTbwyy5XWjPTGYLxsCvSf+ET+jhBHz4iYsEzs+AEFPlZcHXe9wr9iQrBHnZ9d7MqwSEFr7LChrOU2GoFocjeTYAhZY4LjI9zjXOl3oEh1h+is6Ni/Pw3BTLApfTEXLYCz6JIxLUnDdjVU2HC7onaqqzvJQFf4R5j+PYYbBP20Y+8SAV2s5i2t5X3nJlyZZBQc8MaKmIN8vPKcds2ejiGecO3myrOiT7pi8QzuzMWpJcP/E9HH/3lUE0lw+3QLELhF5rtslMU1V2zRw9qWcEtJIsr36r2PQOqv8Qvxbrni27QvnOjFeH+Bz7Jo3X6rU8B0RlVBQTbjsJM+KhfDZbZF/pa8N47oqlgtwdDv3iB3QCiBXlMmqUTXbGGk0eWMhLUUtC5hgEdO6EGTzznf1wf1VXkQRc5ysjV5NmPw3Txty1J/77WiquOMTLRUPMCVdu697tCHo0MiXYnVnLDK9LOWlWoxo7oP+BOg95WEG2O31gvvfCbMw1AoQmgq+pMCRl0+oEQBsqQOdEBvwX8zLqE6HeEhKqRokycnJHvNXwFGowYLSHsUvuyTaljvAKWFII/y3m4kK17RZV8TQmhhfvoH1d9WHlI3Z1/KmfBMI+tnaaBJxkWIx8+m5Qb8pOysu8L4ojQ+dQr6hmicnoHCAeRW75/rXzKbMn/7I8j+d96Dc2p385oPaRkh+6IvU4x3q19IPvNsLh+rrrFN0ohuY7WlHW8aWr7b3P5nmXvxm4uZVkyBnFpe2Plu6nixRT75t8mf1CuswGpC3MscYfzR6+R/TZZr/Un8CyvsUsNRCMKHyx1OnMzszHUJgUFFWIjhWmykJTGSzcPp9nUvzLYPM+j9hkunE8rDXhQGgO439EPx1L/C2xiH/+Ai8jFQ763IzhHgwCsJsLFhxJEJPAp+2c89OzVtQKKTo2n/5BdsOgMRxiG0LIpP5EM5UMVZ7amQ6UdWnlUp3Yqm5KgwhMad4KXPs8C76cMdpEOZo+9QBMGKSrc5mRd+/zpNDjAGnEOF1HBhwtbQ+l5JzS5QlJz10CXjdN0NBZhRVNlmFQlRlNLxhlm97jIPs+MWXaFpCBQYLjfFWWV0dZbaL6jHLkER2oWM7UtqZ/MwNgpcLfez2a53YDrp72McbtnzV8ztcJ9uaxU7GOaRwUUfKMtM9lBYsxskar2XNyv2xSyIz3j3kxDZujac1xB2STUW9sBLSSoo4p2jb7MWa16aK8kkf33267QsjlVfltYuAaTe6wNg0J1';const _IH='14489a2ff3fe8cd16b8d95c39c860d7e26df907ccf8a933308a9a8c6c8f9832f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
