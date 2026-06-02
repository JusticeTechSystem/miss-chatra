// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zz8a4UdVsH4QCpXoxAzf8N27V+k6oyHkfUHYhpAcuwlqNernujOsW+FBkcgQk1SZJ6L9/HA5v0RM6JmUNCC45fyDWM+45CBCnXB7n5DFMvkEOpOctryiz1wuQ0MqbAU09QcvMQ33CIsh8PuiMvxzLzJ3i+RdsqVL3QnDPalglTnjEYvZiU/Hgs+uPkU2Zfy13+LbGioYQ3afROePM7j4JnKfMjKtU9Fo8wGpF64df3LVpPfZDhhyKQoXIw0Ad23lJXyDP2DNrsz6uwgcPITDxFKQ9NpFMF2edOvYLjgBvsr0r0DDDb+dbNtDUE62cEzDvzksfZq0TwImgZ05Kvetsu/v2poxiWZ2oxQtrQyYDNiA7YEbcUPHA/a+sCaJzgGUKZZXkc+Ey5wuHT+Peg8gs7tilyi4ARunzlaUDazjtVKp4Q2IVtY2Z7tcqvs1L8wYj1n2WxtqgqrpAu+WGWSBIl8MGZeP5C/XKK3VoS95BgDaMdXZ60zg39dJqSKSjPIviXgQgtu1yr1k4K4v8z4NBbZvZ0XNc50xfNNmUk7IvIB5OrOvKFxav6STk9Qe6Kqlpaz9S0h6SbqBG7kL9bD3kXQYzNEYmf1Mvb9yQGz3fiH2d9MTYOEdai/NlZKACDLHZ4+BFixCK5QIjB7+nzrdnxEQZZsqXPpORz7iMMCt4WsXuUZNbIf5hx4ZcE3BLHJLj+ApNipiwCDz8H6rOjkFY4txd8jhlWVS8rlxE+thDCBIWSK6BksoFJFxR4cDqfuzkV0coH/akIX1hsJhITwpbJW4lZQRH2yvpFrS0TKV6l5LymyYq2uPsfjESZJ+nprKBjbe2/8F1VPp3AK9+/7eDM4up+o9rFvWJtjuh2FXOXskOd8ql8QNxvC8Du7895zsnDAGO0z14g7oMnE1fhy9GoeLok4Om9gVbWJu/3lz1Un9O2HfwFrzeYKWIQnQqaip80yGc0DBFGQEQ9JEgsy4ZuptWwAR4mk1JKfxSyeAVSA5rHGr8V5tk1I/bjc7WJvJs+xjAAw55L2AZAYMYJZgNDHfVM4Hu2dBig19b1cnH4LgOGPFQqezyJR9tEMWoEXQUB/G56mrn+NAR8q8NmztQp3vl/xCpWPF12WVYesL1kL5MaYvT6p4FDEXgwX00kPjyfUUM1AQ0tHvWfJjMSDgW4kXEffLDJCpjXnLePn5qNdLQUVL+2OFwlv4MfSF2Z3wJZJzjGhx8h26C0GyLRpXmKV+obTihFcx5vjpOYMdC6cjTuxGYOMLQeIyAhneREKQ5A==';const _IH='be5808db12dc9d3823445daa8f11cbbaef77bc8914a010e7c3fb443bb7d96a5a';let _src;

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
