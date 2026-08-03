// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNAOsGkGwsPEA9WRaMrFpYra4mhNV1TCpydly04IcMlhwcZZ55VS3Fd666XJluA7yvS7Zx/9vjIydXassXb4AkDcLIr0easlFwxZOsRRQgTcIbAv8Tbjpa2uouyNaxKaMVy1TefnytZOL0s0dPqLXXiMkSlLV/fpYDVxCIQn5YovjDXzd44MOaf2ViSRoU/ZNEB0XHR/VTuSosWtk9UueVkKnNhpHIQhTsCnC3QFthkoGJVNOwD/wAvp+gNer+3dhN3QJaMe4Fs7Ws7cPR9mbHpEVtjEYKR5oD10I18u2GAA1I5d0uAku/Sov/BwGpx5txf6ROCxKPMKhm960hcSC7C8rHZ5ISZlFOAFxJr6zmgfQ2fio5tcOWcxyKHW+NhkXh2yOXkGPJ9vy7attWqz3Kyc0FT6ch7JuPcIS1C9MkhA6yIJ7BjdBz/qxWDGO/mk4UgV+3hORFtCULUqVQ4wEuDCLkYav5n9sHYAHGxKrTYAPnT8Ih/y1PU18G6tEoDghljZtkG975RnBTF9/1Ly9yC068y4t+rE7pEF0dUyobeU642OSLZREJPfBAd7w6D9G/PuLQ46ozw4Lx3mdr9Fmpj4Lr9wcWgZkYkFPWEDc8GElLe3aK0wWBH/E4TnptaLdFpH1j5E4j22I7uWIDkZ5US1eI2l2Y0p5PvfEL03PwY7CZYP0ByBbH26iJZX4akT9hrDHB8RTri6YQ5xvonL2uwEm3fO5n8gqAHS4KPw71JAuSPrnBr6rHIBNlC8reNSsewq7BEOzkhgNSgm2lsu49uSt8zsSlIAVfftJ2EOteLPTYTX2zr6RkoLYjcOklT1kIobyH/uDmLZTCmUO9M2DHq0ScZByCqun+tgsFi3eQN6gFaJEBY+jN8Ro1/Z6wityW8jdFnHs/SOXyb9ocVYmEtwfsYUUmg8joMBbeMWukayAStNSKQLOTB/DZ/JtMxjbum7rAn6sYSS1HBN85tX8OK+4hCvEoKEiUZKYZ1r/NuOgh0lnkaJx4ntTRH6U/E6v9fcrB51lqZMefTkXh58B+SzfsRz++aDrWjAZXthi5QFZN32rxxi+oE7rQAGCUQzV66d3ao/QbkqzY0I/m0UfXx1nV2vqo+2SFO8mRO5dIr7peAXIwh7WscNvZwLsgbRNClkYIHnGPM3WMqSNYZTKVWvKrdd9u0Pa/JfJ1kgbNeNrfz/FpF9e64RemwbyRvd3Z89W1ABhOciTOdknS';const _IH='a0f67c1d897712e29a96e899a79cf5b17bb7c66c49ecbe1d75a69b36fbc3f44a';let _src;

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
