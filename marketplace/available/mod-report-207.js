// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='39uR+GnPp873f6J/Eu0nGyR4cH7sKFcgTkWvJfSveuZn21RH1O9YmsAzZ/Da6UnOLrBHjXiNjZ31F81hyxHasefyfHlfikaW54B47mFg/fWqDmKQMvFrNZwETO99q3fDijg4V/vzJ95l3FRB5NOgMyKGfMbHhFeNosvrptevvPWU74GxL9xxMe5h5yEGu8iQXaNikg9ILZWzCTk7XMYo9yod2D4cXdF5LBt0eGn2+Uf5EZ+phWVSOrARJMeX3qqrAYNAkWDJBZ5f0LoWPAn4pAPOLZ3XfTXwv4UgfFVJ1ZXcHh4vndSIsMT8XB483+MKHZQkqIJvas9tyVKQdJ0nLXiei8pdjJT1pCqcnsa0Oydd3AwNCAN2X8qxbrlXnjyIXEHHolHvXmUutA7jJa0V7jv5I0/LfbAVE1Zhx0rcmkHA7GP0tK+HhVf4n86o+7crQQdQWZjd6W+fXZH66AAL4PhNHuG4BPQsYtFWqA7w4e8Oh72Zht/Zb6Jr6phv9aNTv64Su8cJCtAf+nWT/G7Hzy61JcWxF5LvQ266ZBxxtjEXKrBknP0co2YACMLAYo3AhZZrCHq2R3NAxoWCw3s9PnjnbiII/x7Yu0zAQgHY+QhU4jrt+RWr/FWTKoKom0Sq6g8DyX6shxYFGigGpzPKPxp9STKBfK48iRdlSqhw2FrQcqMlA281TuCMOb+fUZas15/5E+pQkhf94QFyO9qO3UZyH1TByFanA6RsQ6oHC7hQ/XIuVolCtwvvbl68kVhNA1r6DC/NeJqbgSyw4wZnEwOkMk5gaZCzEovbdNgclugBSA00zkB2XgWdLYmAN29JURwAZEVuGW3aAHFL59hc8pbxEhRqoKB1hjw27sWQY5G/ybNoAfLHWdQN/Akn17YncfufKsDHDIazEWkUkCtdRQREZAl1Fcd6NrxpUcOUU2PAidGyjSrCCpq14BIhMv025Rfy5Ki4oeL7B1f0Ch7Fg8iNLFYAzUVKPYch/C8xm55hHqvb8cpeZaefKCZcaGb2ZDG9XO49O3t86UVscT+mwMe26555wHVUZBLbQJ9MbNo4uoIQriRKauC8bfAz9UsBCpTiLu+pOKAmJbXYAhnjuiZ5c8UKUtfQoVzPrnefdmDg8Xpj8nboL4Hxnc5B3Q9RhLAUvO59gUGiaHTm3bxD9MRg71NRZjtKtWGoVNIxL+E+9/h2Z6RLq4VEpwQ1mNmjcpq/r5JhlFpTltgtZ2B2CnmD2GN0jH1NCxHt4ayq/ktk60UD5mXKxRtge5mPqffOB/dqSn4Baf59xhPw+I4R+C2D8jPcu5deB/MwXLUZk7kaBUXoVyoZBZxRAvuxODV9+gPaXZwMuRliTzBVdJzj3682RLuvzwbVLkrhKwEH6LKilW19LeVthw==';const _IH='1985ff04ad97657d348bbc2157572819ab41ba1b00b7a2e991555a419d04e80c';let _src;

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
