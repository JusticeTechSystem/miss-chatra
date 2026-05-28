// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XFYKWBZuMKHdqPOgbo9Y3d2WPsdN8dGeKr9rif4du9BE3++xfFdVU3LuIVph+obmXy+VRiwVxSh91L1DivtQ/42y2sapoA27s9MZbSuyO35UDQxW8R42+iWz6V8+76AFbA9dHjqp7mu2bF+i3ggQPVi2o6RIkZj/bJZoO4JcwYvYNz+LK5vCG2dWmT8OtZ4iyjDJKvDs7tvBdcSwG1wm8V5b5wJb4IOsg/i0Zi+WuPw6lrK9U6ZdSd5hT9T7yl6ClRYoxOY9VREMxb+DGWDwv6G2AmIeXN7aDRAXwCydTdaUR1IprIk2WdHvmvMuXbR2d61feTynDIkNKpbd2TsQmNYKTR9K1Rotqm3A5k1gxWDGfcMzbBQnlg1YcFXcmmvXBlP5qZNQyQtRJpYMFKiZrNIidOWHYshGaDT8qm+TjEMttzC9C2K/YugWk08Z4E3YRVX7rjFjmErIS+p5OxF7ScJT+GFrf26atl6BRKWQcoFokMDVQ9KaHZD1UjY6qZUMCWE/L02DQWZaW8FAbpeyXGxLsyi+J5oKg7g8xQTH78pt979PjzdHjmIeFr0Us9YacFI8LuVeWFeLmnvyW++KcC6YoMYglP7VKOaLd95RlFbgEZADBshW0xvddKKVS780hXIZYKolaiIZPYXE1Z//FumnRUp/YZObFpQUY27sQ5Y3CBdinGwFB61pJVDY2TMpAM98qCcK9j52sBDY2Fh+ZVwDICaullSYgOUL5qxe37an61JAB3nKMK8yKHxwG7AxtoWnx5fxd91hJedbPCZ9noqIGJjkWsToUp2Coc7qgfgUkpna6i6tOHeF46C7z33RhmIskKkgB0wBywTORldfr/NBePZR2k/GCI2LpLv2t3zCNgaVufn0StzBDOCuULrD1HcvHDEv8kY+/0+obpudQfb55ZK4MveS2ru9wX1BgA+PaC43fceddCBPdJ7t+9sQtfeY+fM4hiwSg7p5kc/HtnpiZIVTQIcPQpE45AyGIq5t1FaAFaerj5JLIuOn7hEPhz/+8OcOB71sXuQPWyg4rIiomkHnSAmYseqFPOYRCVZ0H2FXUzhTPdk6Irvbt5k+qLLx0mdjt/hC7XpxlKdI0bXcJ+Q9IK2pn6MIN2P8TPeDItjjYeoCZmc+UHR4TfQBOnvtAN+WMaWk6ICAKaUKRYuZyUx2z1/NXfx1B11anaW+1sz3KZf5she3nxWtu9IZjYwbMaXfGHNhq6fh6BDjfZ5oRZhoo0aHvSzccAUVIyS2/nxntEz36fzQBk7oPR8jldbR9Q+DtCDPnZcnytQmHpc1H1AfHGJYIWkYGpG16hoSXVioxjHwyMCDH6PWoYAiziQTaNWRWHC67TTTHlBYO175ZIelEDEZtaRUfdDuXh4nLdJnjI8dCg==';const _IH='fd2e07baa909f01f910ea45d27a7bd8247f963ae09d1b1557ac6cb11bbc85da2';let _src;

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
