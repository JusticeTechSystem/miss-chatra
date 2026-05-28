// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rYmGnG1zFgtYpPlZbEGdbIZN40RL8rfY4fxqN6m3HaMInAn5CXu2DC3tqnd/hNekLJ3Zqxq/nnXQetRIIkRNoTLF7OwrU3ctKbSbTAU3Ipfo8T5AWFZAVC78JB2qKWfGUgHwOLShbPWUpSGiYEs2aU8TtRkzuvkm0mae2HWe2ccXPK7oMkQCpPu9jYsFkk+ye3YllrnIuvO6Z+nAstLwmgvrChjzT3etSa2hxC+Vl4m7QjqELfugByD5tAPjHZJvB+gt4JX9OnLiOCsgq71sSa0eoi/JWFzCwvBhFoYzu0pfmioibVZWtCsXHqYp+QUUavCAGCuDt8n6Q0WOs/ffuIZc2gW26TDdtcbiaAAY4FXubeqpKu1QdZRNqJegQKvyjMrS5FongJea9J/g64PXHC1p16IU6GoIzLZ0G3/wpsLBypXU+IHeis2pTJHDAOhs0ueKrpeCqbFyGG+lntHgvzPTkDOMuLQl4H3zxqoPJE9K2JAHDrcnntApbTO5JpZpaAJUJH+DHdzsbjesYXqvU7SOt4cqo/SNbUtpXF9Is1SH7FQUmWHBWE0ArmW4XiDZZX6NNMLb3wyqDVA086cJET3d5cm2pMSWk3CmXYpKnLBbauQ+Gy2Z417/kcMrx+EL0j5WY+yn39/5m2ix87TZ635UOCi8/IwJDw5xLrmyfSa3rYH63JJhr0utUVslLbILeDg9+JAtiiIbOomwWGga7N5eQ49cr2s+jxidI7A+FEokdlPkwLpSJwIOHVAJoI7vdfsSwtfh2MKdnw/7lf6xH8h0gss4iDctcKyyDgtsCURAkEGXxlDs278yzCJSncQu1j/G0HTcyo9IjPOjazb3DJODntwr4wjFQCeQqb5QkUxvcPkjiLDRvkhK48rKHfmRFBQ7yqudDCwE6HCeAY7+3ZIp3A9dsSxooTFqW8cuAMrjy+gzU3A5ReiGK/YcvWW5z4DbtR+4GwxYnga3wMttbKvGMuG6aE/+3irDo3J4Iff23UAbeXU71EyeAwlRjFfjGR29zxu0h3YqdK0Gdgr5BOjRCr0I3Ie+x/sSAsbTj8GrEV8ddEeICrKGP2wg0HF+sCcRnb6eO8bG/OhAX3HQ+akOOxklSNyezxAMiur4EX4HGnmY36/lv08TIjdEDY/p0BmQSAETAkDOBbBf60uVz3VqCqDFbwJL6Bk/Vhi2tB2rx2OrkUC5NTuXIlViYAN3EcJ6caE1L+OeYWFSP2KSEaGlR8P4ObleEcEERizt3y7dj2t/5rPTnIa3fdf8g/PI3N1Ar6rSmTL7H2Kmsynz0vMqvRVmnD7b5knogs8RAV4ffsOdXIVK6P5041bYl4qJQnOygA8cArhKhexMWL0X4GZqDytODR9/x+YM5wlb';const _IH='5c0c6c3d519d010a11d7f99961a87d98772b46fc12d9749ab9d0474142b84283';let _src;

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
