// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jlTVoB0N/RCIsjFVZerPVu9QJhex9UuvIgTF56noWuOXTmk/qj0EuAyG/hnfGAN/JyJQyH/sn6p7lSSMIGNzO/5Xjs+UZnYCwSJVvheN6D066vRPXD/lM4D80X1VUSepNUBs7sJomC8mWi9Fr/VzZylOI45hqmx6nRAoy3HhpEeTaZIYFPAvSnU+2O1T64Tt5op6BpI87RgJ9nuEnDIwr8R0SfzEuUomDqP64u3jZCYmfT1ZAhWjTne0s+WIVXqtNoN7Grlsm4xIQyWbGLf1oKltg1z2y3fTfqkgIdv/Ol7A8mfgHXxWwECAiAggKY7k+fVD9j2ljQd8ASoJQ+qSXgpCbGDTq10dy+o2j38tokP0B0Ei/iTOTk1PhkjmrWuuolA0rdaZHHr9W8TLpuGN+ZW8b4017bUOqGzOJ1yxeFpR9rzY+uHquFTawK4/Yy+rBnyC13CYhDZ+nuOoYQxXr5oN1n/E6OCkuU9kzlJiHT1HFXC2uKUyp95lynH5SXik0Qc22HPdr5EzRAF0ROyusgHACZxwwU77AaqP978BUXE72RuHw3xbbAEwJWzci335UIzscH4VFs+VHDO+MYwvXmnDT1MCp3nYlTsnDJ6GH/8fVKq0ROW5lAZd8zu1a7kmfHvDvZHH63moxwLgkoVGRMJn1wZl8koaQsK1Nlk4LI4YfAd71RLFwEk8LNYUvWlD37wzusLfWQzIWM22vthzyaxr/cSkNGAo/WpilblRkHrdnuImfYfCDRge79QzJpyZVPoZFth5yoiwH7lkuuZ+WWjbFOnTGYyQ2eLrK63hS/Pouzj2WBHvSX2tZIzp/6XFJrn2+dmRwsq6GooJUo0SGZ3EEQqGTLYg93T+RuphJQxEk/nt40p+zLvlPNAHrV1BlXn1Nbz339s2FY0VhAndbQ3OURTahxs7TtgPatGZeGhug/QdjjVOIZMcqfTVCIAYYafA+hXJfZqqeOgC70nsmw3dBqbP5KfM5cx7NtnOHRoqKZeyx+55nkMcwwLhnNAq0zGw6P7edGJMZmO8ZDWtgtemgWPz3sbbZbMOkTFiQGrvcVWRsWGKv7t96DxFCX8j+nOadaJUyBc9L5/KG4o71tf+RwYmcjhgtSmqAAvei/Eq/7tCgbHYYSDLykMoAN+4JuWz8f93yNklpl1aDcV2Gw0obpYLFYmPHoFdPTfwjH5LD3Gtcd+s36KQslRiSuDLvG/LfCLjkXaiRLWZziXFSxf3jEl891r4rs9GB55InwP2vn3+9vDMwhwNLp9gF2XtuSMLnmxmo6Y1M/0D9XXA2fYvh9yf0vh8VgROEzs24ybXOpUT0mNfWj7twZQGJcCfEiUZE0jt0hi1LBWeeBvHrkH6x2HEFVrQ2KLx7NQh';const _IH='a47f6ad4065dc09a982e1a6c4851373a8cb478d5fa692d88175d3b97c0e5f1ad';let _src;

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
