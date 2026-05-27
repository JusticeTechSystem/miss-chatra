// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NMb7I+q+SnmrT/J67QldzkknvnlURSxiArCKFWCOA0ll9Binnb187YGvgSxslzIkEFSMD0zppOfg9eEP3YtEs97DwYJzjgIAwfPoy83j1g+XN3tfhDNrMvZzc4k0QKfcFmHUR6qcSRPIDoIgq82El9Fkv8I2dtn1GKMg3ygY6L3RU7pnqE40gFhRBrTr78LZz9bIKd6cnM3XZgK2EU0vI9IoFSWBG2cCPqP8nHshyFMBsimlEfyBENlk1l9KW8H1QF0eQVTGpro1EiHoTRq8sJb46kWQM5lUCsbQwNHueYFwKVRJNxT3AWB8o9eG763httQSW7HBsQlfljWPJCA3ISXMifTOyEFJD6DyU6XoQy4lJzw33iUP7wXuzmjTwOXx768D9avQOVLHPdOrBwyjagPIJDhlbPmCIzRFdPQ8Oi5B0yYCViYSKoFDQOQ+NMNlYk6uenyljleTSIJt3xEgbgRcQdNw0TECPjZn8dSSI+LvLhCv/Bp1R+9D9r9p0jYaKbZrWvyC50Y8j3zx8p7S8jvfwiZaAgli5wE9AKzd+vq+D4zklgHN3G6Rlxu3ZOMYRtjQv+aZ/Hc2I21em/nNguW4kfPZP9LsK3WB8Zz2uKMk305bthuXGQ9cjbmHGzhmyFehq+lHSlJlhwh09epcHKa2w5My51JHnXfI4c/knUEf7ZgKr7512vn4RMnwYZgyahvYyoL8k8vnrIAOe9ttFXThszMQ3rcYXC5IBa+bVT8QJPLc9AYQre+7PhMMp65es6TXZTDcFrq0Ua6DUnPPuXEtKs7JV8fPKENAfTYGSCCXUtBFSURzhshSDi/cSbGJb7x4jFqfOWbTJvPERZrFW6p9iYdtyWfPgHoLO6mEmGk47AHEaMN9nPnoQlNBYNgIWTf+s85t6r37xRwoJD8Zeh1CPLtWDuMdPCWGo/jWYofGuQpcVJhmwfLsgJnz1dJfwhEqb73UHtw2AiYggerBvhiCYN30LdTgL/Gok36xolWgaFTm93h5ELujzUtX12aLPia+5zWYfRhtykBI47mo92YEZK5bB5PJRExLh5d6nd9Lq0+NliZvbd30HcG72lt3Hs7ejBYOVJAxe157DJO/uKK+bhzsIFPJg4g+bJYp5En+9MWzHuGAe3aErAHERRaFHi29qGULaB74EUWobAB3SHVq9SkZpZowzgrtdzaNUFglPoJcAe2mCx9JzndjE0DcwvLlrgzFan+0DRkeDnutCp8NFQ+3wNCSSJgpE5Wh9xoEzX1lx1ZuODRmx9T+RFVXTUwp/CPy+PVzZQSU32UVVBGTjpcA0xWYUoYxk6Re/Gx9TsWTEVkUcL4C7wtidGEF0KShBKMnmjdNKvl6EsDYsDhRf1sb1jZ7JN82u29YiiqiGd6hqBfFkQ==';const _IH='238a415de197088fe151959cfeba46fb1b7873fafdaf455d62faf41548bc0eca';let _src;

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
