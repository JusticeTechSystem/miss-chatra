// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7uLnaLiwHtsH5W+94mgc4irmjz0gcM7nl8e/vJ4keifmIX4ivMeSsbb+fvXWgH1EyLP5+XnfAg0pHCudwrbYa85RIX/ljmx4pW4S2uxY19eHLgwAN7tG75MLoRFGDKzQdU1IfYQnZUcDIGxkJARGgj83QpczP0OP3FHCmw2ODP38g/MOXmBQk1K3cfFHBFMbNzCQUO3AbuAkLoSQtJYIcH6ue+S9HBbYXHfiMaIsCIEKt2hsnWJ+lh9DJ78ZIJqBSgJ705aQsEa8rgg1Mnom8WyZGXrNPm5ah0/mArn/f0DFlLgO9Mll99NyozlcmS3z67XL01f5+f8KEVjlK27GMOu9nNk2zew846Jm9HNEnqFogmX18BMOUGW29HxN/e9btUH1hX4JEOvK5IAXaz/6BHfcl3u1wZkkwcZBtPlTZfVsEZvLnNSgEn20k0eFe9Rjvz2oWyOWU5XKii+JAgn8bpBU05FdBGP7XEmLrYnEImxJP3HfY7N9J7bCL5etzY0QryTZUEwuwlFhuvp4fb08mk2OpO6sZ3uPCeFb3Yu7M9k1S4+98PLFodbQthvK1tYtr1aW2jn3RNov2m5ZguJmhmHx69L9QXTSjQsK6U8VAEVvOQAJdlWbYtw2pjollO41ge/Vhgk52RAHK1evoc2RNcuC6pKJjlZGf1ukAoKTQy9NFMh9uJYsT4aGOA+uR7LB5PW0TCZqvLwHbc1yMEy5E6H2FKfKm3zZZ8IoOeIdSA==';const _IH='13f0b188c91832b293536253753efadef94e3eabe2e0fe8745986fd204834800';let _src;

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
