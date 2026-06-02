// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='agLoCxAlpMNirDlDx5/NUYjJJsns++TetVDqV93P7w1+7edE4kKuBG8H3dC8Kf4zwQRXdjxktFldKAmQcBeMza9g55g0pwhZzd1kwDjL4wn1GVrQB9qTjaaRXFzPgF+2KbGUjq0Czg8MYLeLUrPxaLNHQC+NzwG8dcXKhbHrB3z/YTEr/KMNKVt+Fc9hwg7avW8ZBqaHQ0KQXqkl1CNgbNwGvrqPU3hRN97c6phoFXtj8ss53+xezRYoNBCi7Eegv/tpXt+iaLvBZnHa4lRwJqwQCTbdYWdOshoPvimveeLvdsyTviGsn7IwJ8qjIh1jS7MOjD4gWVlWLbCb42GJ1SQckWA5UJF5TUhYSJRqtWoOqP0OrX2GXaKQjGRDP4HjoB+C9tYnCT+tkWFLCA854Tmwg8m7gvR7FfolwsxwztXE4d6Nok3iLS3jtjLlZqL7L+JFPu6rJUfym2i/ZxgaAHc6hHm9VvgIhLej+P+/V+G1xwyOzq8n+GE+oO6gvP35rH0q0d+wi1Bu0GFdFYJwapxu/9CpubOUIZD0yWIv2l6TStT4Cc3XM8kl7QW9UZcMn/aWwwXOzTJu0ZShN+LPaFFQiZSC9hNTW2pbDJ6dgAU1dh2/tVgIwutf3UnasD6Y+CAoRd/UOq4IgsFerlTUhTVo1+Q80C4cAwgIincf5rkSIr/RmxWc5MyHTTDf3aEYtU5upKyCCXNglX0GNLFqy/GBKHQdw5oJxRTvjfr0MP2PO+zxc38yM2ZrUlS9P2WFS0yGdo+qgbrDQX3Hx9LSgLJ4RanFBIq708X8Z2umE86kAjNG1zjOASP1hoa1lMNdjVSvVRj2s33L2DaLEMaH9639abxANg7jOPtfnc9nn6oNP5RWD481F/3KZ5WZxtr7NaG3TA7I2OtKBYyJxSpZ15YdvwE112aX3Y3qigwSEKCi4KG0IlhLR3ei2SNoF0qU3BVwdN6dCrUt4zQiOvISGClfkLhf/6rb/ihLRsHyR9I6wsd8mXq1F8gLtbndWTviEJnzuvRgr1QewJkiOtE=';const _IH='48fcc924af503a9b82d038d53e749e3d2cbd5ca0546ed4e1e8be15622df31ef5';let _src;

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
