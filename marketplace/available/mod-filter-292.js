// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTrcjyic/yEYRqh0ewPYMFJXVDsQAHzIvbDefhfwvoADHrJ5SFKs++qlcrWYfznm8w4FnlKZkNAFHdAK/cPGwNOXICNSbyfG6pyPnLyhJIZQ0jOJP1FVt4flNmCx0bMGRyKkETzcqcXElrGp8qJwc5bdZ50YW8ITxOWKYUbQJJ+Ce2Ky823a8nhDaOaaSei05NjPtnU5VZq75+ZuOgv7kJcd4onI71WCkRhst1aKeAelClFKTMz3E/8I9pT74Q1b2h/57vjaTXz/SNIWQ0PzgnQbj1wLfkUKwN4Q7NM5J24D1iR80jn58kebSh5vtKn+kIITvWUaDScqgGLHnXZYhttQxTL5AbIPdEitrY3MpqReYA3QH/LZk7+C/Qa2eST++eX0gAkjR4YdRfrHzW5lznQ+Iliv3czDBUSBst8/L7A+8t1OuhTtHiGqmwwcvXymLwK+r3FdT0Lgl7o7eNNUW9mGj+RyeBWq6xLPXiLLFO0eHBojGM2yVEk29bxe8wnnYGaXHbNND4VMfdN6De+ESJf9vX5BU5jeqqou+tr2CJwvjRFGUtgUkWivw5VUIcjqiGiuJRT8C4TFJpK9jY1Q6ev9zJHYoCwEOJxd6IVG0fyWImCeH+NbFcn5TemJtm11CHXBDC1jgq/02jksEayGQx83hAVk7OB1xLjH/oqRaW9JIuGpn9sNQqDE7Uy6CpkhtbGoJA4gX59X0XUExcKe8kUkHDUxUfHZqo6bpM++fsRXsfJUKsJr3yNFu1t0NpKnas/0L1hfw7D0eWErGKkmITUKWsoZkfJMB6mwGEMx0mwia3inqqIqXzYIcCmMYeHlhcjfhhdOjtg1K4ioIUaA91CeuJFLvqMsw0X1snA+Q/FBATXzLcEvYS4fzO1sjiljqKbnKtTNe1dwzQaXK+rpS4sFvDhNGtRinquK2DJizXUqzDv7uazymDmnwnoD6LODDQds38w7le9sxuw6VVf+DpBQnad9lv4xCuvetC3Ua2rx8zWxVogFy7vgAhFPhCaIplHEK6n97yvG1nVe2p7nW5T2sYhArIlP2S8PRVblPq5u+li9r2f8jByp2MJpwxmA0GF4F6UbnRJetU17bB31JuBjooikE6F8A8AVJJxMeretaahz2k1QO2ey5OG4Jt2sEEBUxQnDc64gL2sHTQpyOyLgnXB61WYDxekUS3qHIJ2ZLOc8t/j7YEVoZOuzmRc34TNd5plDsfhTO9otmTXppIp3HVtGnyCo4vobAqK/YbNXI2ZZaAWsiXl7viU4HySTcee+pWBknkdKKdZ5kNC5EWX7Cp2+5U+Ob0GCVEID+gT3opH/apCdlIVBrt6nTp8g+o9KoKwzBBrXM2UIDdTboNLzCl/kTRRFxyrigkdVHvYD/J6D1un5Gdv';const _IH='a12f92cea785fbcf9a5120c836e74aad46439887baa41e1c3685432a120a575e';let _src;

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
