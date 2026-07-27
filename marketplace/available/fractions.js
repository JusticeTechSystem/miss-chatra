// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSi/ejtFV6QJNeHs0Ds3ziD3EnMEfBnFoOC+OMTZdZMbqTmrG2rQd506zJl4xp4IehB8mehddnTAeHEC2cNEFUbtsLDcEn6KTf3l6rG9ZAhtJyXoKtWktZBMQrkIi8F97Xz8XSZ8jhybiTq4jtieeH+0oS8x18Vh79BtIXcz8vLK4mdb78vCfCve9Y1ZvWat59iwk5ofF0S7t8aRWk8w9LYm7YovBnbrMyXaJDfui9TSRV7aIvO1vPep0HBq2WUBodEEFGYomcip2NndR+HnLnpKmgCmlHsaaO7i2mz43We8UGwFR00btjF7ijQYmLC06EEx76jMgN2z+IROJHwdCV33QAb1X/ijOFjdT1n8EY+DnEfyoYH7jq0cVtkoeunhbjw7AxuRKheCc0ITrJJRIyFxCicPtyDUg3iZlgmkbPCnGzLD2cK6C/NNlJCzNsIBe0oxjVjE5OlOwZ/ozXzEsu+EcKNHPNKKGkFpy5EEqQA3KSGvu/OdN2wlJFPeaiXqgrUFvxq/5j9hKaLTd/uG1IyC0tQgJGyOQdGr7Nd/5L95sQf5+ss2TcBN8vcU1fAp8Y1U7R9XZG9rwvd4ALpue9bqf86toptpo1zfwMisQe6A9FCjWiDsUSiTyP1OJI0HcmgJGsB0MyXYfLWj+3Ahqq5GYrAhZhtsU4Fa+cSxBY404z6ZlE+4fvfa4MEBANRaBxmxj4DpNyJIYhpC+BG76BudGTJL5haAbcEI9PUwYrc2wDwmDbmb79EvS1a47WEXnQbQT31PUMdBfldapkT3RvKtR/hxkUlKsOqZvAf0E9qg1MQMZAnWK/XfcQlvZEuXhYXVBP5PdiUJq93RieJH/PMWZ68ymwCOXptXwDB2BNjgR25kqT/OyJbM4q5mp2dVCi+kJYcAQz6wanewOuMh7hr7gRUah0UiOvlvXH+BoloqwMimiBpFRn5pGHiJXIfpmcz7Dc9rst4wXMOiREdYSCuCP6/YFf+qNSBfYx0j+rGARdI4dAMIXwaUr3LUT/fPNYDGH05wRGomESvRBoV84SlYxYl+AH6/bDXhy+KRgH/JK/mNkn84g9Xtei2q5ul/19p8+V3AW8FHx7N4jzL+vllziFleFM7oxa5D9DE9oIrok9UsB94dpZ0NNZXp0PZpgsDs0DvP/R/rCtL0iIuv//migs9rp7EcfavT5BiBuyz/ca7uSWvZyVBQ71yaOBzcAiymTgUoqLxsAajB8acoizL6hQOynfBtwrQo3WVhBJhTurXzMeIObfiXErqUxoXHHaQ7TsXVMLt6b1SRHrTyVn/z0PH2rCZcWb2nQApANa1Rdj+RPeRSDmiMK1fhCCUyn8sQCjvTJ9Eg67VjO9fMpqpPODybC1Gl6bDfikVlIwwQ+KduBXsv/e7a/D4PwyqZug5l0VrvPvwa5nDc30bhKu8nPXNpzdlMEXmTkiuMH7YBg==';const _IH='4a9f70fc2d6ac834b812194a11611bbeec772a69e6308fc83114400deb0b3844';let _src;

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
