// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ay//3WLFqYpyQ0dz0ZlxLVIN9hNYm5dunXpQ7YVKki88yKSqk4i+H/FaQYYOGipjAQFK8RwyKFCFkbGB/JPxKltNSmYlOuPPaaCWVDV+qiUtJk0AKtrpPTUVmzSMzWwF9N73QNo7ejpsPwlxqaPJ5N3yPKSEme96BFg8UcdYmAzQs8mJxQhr1hycHZ5U4f+75hIydkRjyHX6cK034u874jU9zupteTb4dA800Fniad5uW1MdMyCW84Mwyt+j/A0I6LlHTrvM9epfGI9EMD1UJ8RedzQdhG6FZOJ6okYKaAS0hGUC4PXO07GBcX+UQkA3oqGio4UzQhCF2XBNo8jR+H+97CSln9fF/NaGyut+Jc0Q3BniKaN2iGJIP++6b6Cn29iSmk7HmqvwnYRyj7zJjGn/c9QLrJH8/DEZAMjJ0awRpz63MO9AzXEp4FEWx+KGxFd0HA+061Hy8pGMD0qjkD1HhUftyGZBEiS+sT5eeIZ4w9wbHDdAepcmnGZ5Bh6W27Nnx/AiHEvGukkQ4RWpy+diY9p0PnWnAMvFwLX8MxJ4HRXIfHbAL57SQjI6Q3wMxYGdmxXu2OIXjkQRtQ8YGpQfhF3Pwfm/TlxSlNiIqC6fxI0E61xJQqt3l6LPcfV+VLVEEpZ9YxyYSOtZtEGscN2v1Jzxz8kwbKHGpKkrvMFuzFY3cy3jsu2qrMFVzO+WVJHaCTOPun0uKkengyHL02boynjBULVW4vCPwbL0W+LzKvsQUNkl18PNHJoonU0AeUVRU9nhUY6HTzIFoIhv0uwFiYt5a/ZALFKiy3Q/FzgSUY3edNrDyuzjMd/Vk0laB/XWBjtmyOr1YSRawgA7QgniXX9GNBEUDmAQVac03IxKiIBanXMB5GR+4CxpX6O91QT2/ilDlG1od9XZKh+4uwPUMUOmcgqunAkjcui+eebfdGaJ2TMLHPpxDovSq62pg27L/XwpXxeeaIK1x5j3K3PtoSCxO4AZ';const _IH='894af3d111e60291c28ab8a277defb1a0089ab2aee9ed12b81baa5175cb53da6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
