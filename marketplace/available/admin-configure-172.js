// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='88DKluVFP/Wlef/zZsggKvP3SlGLNKj3ltOytoAYT74kC0EIPPzwN647vK7z98rzunve9AheX2xRlpv9Cv2jE7ssdV/EAVoOYsegKD2wfDS2gXlzVZMFfW+kCYxjxqpp3uUZAvYuPI/fpPonE1KwaYhlQgdH7vpFlIdezxkCv+q02Jwkh0pXc1hQmE/WP8GTZm8xp37zPJmXooDLXIPxA8/aQrH6z+R9FUXNGHn6IlCVjKEQcckj5Mc9k0mSooh0e+LQkuZ6WXr6+oByDi7v31a/SP//HA8ZOrWFlPRv8tuVGO9dE9w4ytfdwh5+kn0OAcYPwGAM7QJ1o/hJ643MuKC6vyeTjlEgkY3xrEArWQX8HaSrQbOV8Qh9YQ56fk2o3pffUWD5UJBeVmfE6kfBNxMJqZCAQFpY8YFxGtFbktv1hJU8HD8Ok7fz/+bRMsON/dVxJ6kZoaSDLtFLrDd44laLTM6qqrJ05N7HBE1XCRywkGo91d/Hwnwdx+JTDPX05NyrqMJidDFbuZPz634yd06XaO2U4AlzC5BYyAApe+zTeQ5iE7JUYRlkO6SrvUK6m0vSf2cv6gN6NQiDzbMdeo+CiE2ct1N7rF6PibjPZh55qyBIXUSV6xQ+it1WsLTCoU4MYUMyQyR4Ud2Y94Ixpl55plfiYDi6eyzqiWQOJ8e9KyQu/fL346pw+7E6tiCIFw20lvz17klBiOIgXXsGYd+Tn8y/klpZdpdt+UZC5Lv8PxbwLx8jITTk8eSnM4K6taUL4UWSHJt3cDPOGhg5GSMpdkmQNbix0pwKtyh+C2YGWZ6lu5FT1hQXW4h4TWZa6wzD82K56QsJ0kqkmZmr6o9ZelqtfsXKD1FIBBzRHKeCJBe1011PxAQpW+2mWL8tKpSHzRLWAXjfqklcmJ1efmyIbAdIDjIpe1G8Zajlcjv17JGu9r21y5XpZUxPkeisX1RwgxvXlWytQ3PGC1ZpmZnjnxqOiV7PgLln0yoDT3chQZViXiuuIJJmJ+Jj7po8zu0BxmT/N2eldrWqPx47frpg3mDgOA==';const _IH='657e0c39f9b5817d8cb9c8e63015742ef904f74d195816a3dd0a13e1a67c5ca4';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
