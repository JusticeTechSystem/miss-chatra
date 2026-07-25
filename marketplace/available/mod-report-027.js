// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT5U17KkOivr+zxMt1tPpqxY7FR4zwcgFk7Dh+rh78+EnZmQ0Ts03Gxu9io373Gdg++RZDi50usGXQXMAXrnIphxbK8kr4DVYt0/UIk1aP8bQJ8amLy2Rzn+vcWY6lBqLWw5ToHoZf4vKJWjHJsZ7ur5marHWaMPJAIF6+74lI6llYzuLcsrUBwWx8hW3cizFujUz95FtlKTk6WAst0hEPbfw+Jp3kprdQtWOnONn2kEjm8rVBjepga3H3QTD9jkg4NNB8KRPuVa5HPNWQ7IRDjYFUm0LesO1bjb6EDUZZXjCoUJb8JcBXUlsOa5po+QI9NKmCf0kOjMQ/ujXgrnLsnYdbP5UGsTJnA6TUQS1qu7ZUkRRnz/dedBiWf/H0yR6MunhI9LHMEVRStgDFim8QCqXchT5aiVWI8nRRuY9tIfoHM6dr3ONE1RTf+zvqFY1IAToCpjrqxGUULONyVtIoDeP8ZBDbwN0R+UXU7dFw2Xv5e1uV+9wOKc0zq926xCEBaMN86bCf1y6Mh9PRGYsXPVCBi2fNAAe+WvRpy+XDdLy6mEJlvw3IVfIjc4PT208n87uxi6Xg8iqMfOv7YhYeQ+nCneTLl4nS2hwGgEDZO8UuL1Z9f7mOg7fdHtUlqSQ8D1Q3R2Gt+w1Y99seyycort6fY5uY0AGAaCKPEC4QES4ogjrF37byeH4B49k5l+R1kYKp9HuBEhTzlHgk2mzQ61XvJVqa+nKHt/QvvFAiAsIiqntV6SFHHuM6neqtxz4jV6wW6mCGWc1C8C4hdEHZSlVMXdS1BjRguDgx60Y9TK3Cy+wcTHIBadJxBTfP8i3S8rppVEe5gi88+WiLnpkpWvZV5BQKyLCddkbpV2syhs38AWXqvBBpZ2r35vu5uP5Cig+Mdurrio56iQdBdhh83ZtbeS9ej5ynt766KjAmhQJfHxLo0mw85MWT2k1Zhglby6j933ytt5zj3l4W8YK3ZYMQg5EQuW82SJXrL4rB71IxtOZiySvXudS/NhBB9OceH7yxhJr4YZSYvMvansdrAcwnGRt6reHMkcHHiR/VlcgrH6Gg1bycn86I5XyYf/WOXUL94HayqVBu0ML16y/0JMK2rzYdhrXSNo4l8ICN+s5mTQmUY9kA/vqP7+5VEkuPJJmmpnCGxoV+jqRL/Xuvsa5s4M+OQ8g1Ig13eaujpg+2v3hk0GGdbJM8L0juVpqZ98XhkgZXsOEhR1KUt9/5HBZQZ93IBdOPFrCKLV4pJ0sqCOyAzZmJQ9NWEtOeU1DVAuoPyu9wveY9NFi7fv0Ks12dbvUmPwGw2EK1oMXcC6GX8zq4w78KWuC6jB7LmnCcu0QUZ7mTvZLJtqDWxcBtyt/JQ2EiKLoEsx0qQL8Tnjub0tg==';const _IH='a3a5ffe9bb49677e9d35015384ed6bc059c53a7ee3d06f213ba7c65165e1c3d9';let _src;

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
