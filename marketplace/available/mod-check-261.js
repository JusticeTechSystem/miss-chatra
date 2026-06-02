// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WCBJDgMYTGYvCPY6vpfD5bc7nSLwQ0zgBHdruuqyq6gpsYK8MRhg15OcGwHG8+8DduR+ZoRbiAK9evOiyiDkvrmPpikErYfR537fgKjEqn8BvXX8IoFe+0zxJRKb+yTVyAfWlTUYclqUHUoQ0WX0RaEe8PKgH9JmerV1EWt81XCTT6XUTuSN7MT9zRuSAEQ9k5jGUV1c3HADLS6tQgy2ue6mgzkJYKWPsZj1biCzZuxh0Qje8jZlg/8etJkJ/RZ2peu3MPsVI3smLpEKwKxOdGfdL2WWlRbhWLjB+mvefmZjT0g7H5oUEwp/opYBWIxGh8gF3hYcbNanWBvvYAjHtu0ERxexcAP/IZFtH02oQPnNa51uj9OwiYr/y9cqgKkR08KOHr1RCA/FHtgsmNf3idR8/pBamOYmxGssTw9A+QHrSbvp/fkhIHuBtbS85/DHT1IzGAdPTfL0ezyqisM1TlGlSVuhRRGBu+pw2l+Ul77HuJSS3tZ22pSAu/9eFwLrUzMbWPukv/f7jTTXUoxbdHYKuuk6lu52coc6F5+/wE1ACKu/4BDMHsJo+ahDaaSqRaN/RB8tthgQscF3qJNxn3Cq6ONZ9vLHDcCsIpo2w1ajaTDfP/hc/2ywzrBURR8EofcV46HMRcc4qIgpiozNFWbdwG8vsMQjVKhlIpyw9ik8VBorqDc19ZyGNOLe+W8kNzWph7eRhof8gI3be6FMP1QQMQqGGZ9GKwu7oRlWv2LvtyAUc8yNbLEmXZTybBYKXx8Gach97Nvk0z7N+NBo0I5+Z221cdzQ/cYMPfw00f4kR1x1fI44GjmhtMEA7znKP04pK8Jl3+NiMJfIJLZ/k+aFpG3Z4CmHIMLP1Lo8tscSwQ11yYPkaD6IwPOfWCSaRlXi0aFqqLlM6J6tbfpgqkegRja+5a3nbW+iWCh3oxSG1SPEdzGEyO9UQ0mMUwbF0Fnjmc42J7UCkRGzf+LhWfUExZ4J7aZwz+M3qhKW9WPrsQr6H5o/94kk1pO02ga7UYKA8eJMcmrhSXKVZTGkNUC+SISV3hGmSPeb+tXLwBKKNoDdhevahjAJrX2t/DAeB1pgC0Int9ao335VExqsouuIqQkwbitdLPyVkonUbdvusYk7dpUNjSngRnIKu3grswKN6iGW0t0auqzHmnZDUFKD9p5Etyq5xP7nr97nj2EEAuei9WKLBF92cx5T79pvE6JgoIVSajZnfjdrLK7Dr/rV0HGRt9/1O645moTJNipSFPe6SXBphSCIzIZnQkSpxVWhqx/QzvZkqUO93KGS8KzcTRb7HqUgKpKUerhfwMoLQwd3psy4kWpec4UgPi9oraaDYMd1U05sqHJTN0dlDvUWND/EEXDkd9+q22J8';const _IH='c0ab6f804285259a5eda27b751a7f17fdd4c33bf893cfa5dabd2aef5e73651d0';let _src;

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
