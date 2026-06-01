// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQynoyIxW8EmBRkXymsVSRtK4M1+1F8Dw3lobnpafvurpMV3oZIG9T28niSx6Hpn5AkzTBngIE58uNXQpb4j458HfdrCmct33vxti7oWf+FRNL4rjtlkGZ5OZ18DrijOiMNznURMXhDQYGSPaDrMdpvQSgKfHEjoApfk0QI7MzjGKHkzWkBaqwslN6ouz0eTjOWOcPuEzUe3mKbz49rHdbJFQdi65BfVvRrrHMMjw0vpR52EY/7tA04MBiumXYlcWMsBubz0CSoRQp1rNpEfBNcOvXd/UEkkmPateYtnC0t1QWx8gIXmu9hLuW9I8wq1X+EjAW4Vw3W5z1E2Ud9e82uBVRXtYaiQqwVQUEU6abJqIVBlfPZbpceDrV3HA5CzcXQKCMv6qur6QgyTOEzJH0u2ERtJRi04WF/hZwDkqX8PFkNdzY3USqK7Holc6hK93X8NxG9GnlUdnPrjD5bAKUOm1LNJ6sUADrOwfHe9f2y0V2YhhJLP6BEwPtktTMT+GfOfLAc3gxDhb24AsruslvDJ1JZmq5ibTQ/ENdSlHgFtHcen23Cnc6KVwvV05Y6B3pkigmZ2i05mQi1HWT+hq1SiTKX5slvNsu5cWOc3tunOK8bBIRL+d28NiGj1RPrV7A/oQOgsNs7bW5ZTwEDODhUBSyFfcHMT/ikqvpedMe2tU6pHS6K0HmGI6svNR3tLYJSh0t8X9yJl1kTO9zmRi25+8WZ9gm6V5RQ554Q4IrtkuaPKWrGkE9b+PnxPC0BAQu1Xc8r2Jtmik8duRbuynEfp63iTcCy3yzWr6XglGizM117g3yPhrioWs8AQz32XnT8xcHDuGQDDnVTGvLYbdLd7NgXfog0wsaq9PA8qZlhRMg5EEy78DS4cle3dMr2PIn21DlfLi6kieSSRLkQ7xA+9xj/sj3tGnb8aizy337BGjViyXglWV6VlqZ9y/cjnxN6bnLf85Fm1b+FSMCIEG0Ugg/WD7ug4DhcL6Sgr3aimxsD9NgwxanNER6IdMbHEUIYG4z/64s79PH6LUnh4JsRhV3BDcHfSnZPKHmMe/PAAlRxT3OaGtikzBwHM+i3s6QoBleZniqqo7D/VVikto1gPr6na0JwO9VCePhwK58CwsJj1pM5tFLZcTvyVf1wiz6YuZPmMJaWAwtfKLeSmMp4gMA4UlBAgBEMfwBOmkz8zOyuSD/v9tp9sTvbJQDaayaugggJCeq8/mLW4BfxfNqwIiAEkHV+xEzsW7WUQRcOLIx/mbAY620YFLV2n1k6Pu8l71U8zdu9tk8c39v67hnLnSFlOr/qXH8zWjSP2WcFwXOJM2bF/0ypc/S/vv8rrFRa1diYbKMJXyVLScmPQ+k3vdR1icAen/+zHxovjCM7aJqf2Q30tJsKfszoPcDepc1XKF';const _IH='0ce074d1d6f636e6e014f85d524b7cb8c565abb77924f0680ade08c47616190b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
