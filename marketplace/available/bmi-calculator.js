// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR6Kw8zTvKuHez0aWwhpGZ5gAFWKBa1elcHpCv0ihpLrgSfA/zycnUtytqiYNkWn9NOh0AhY2BZ1q6d9j37quDqdGm8h9wseFqd0rSVkZilJWNT3ZixJzK8BP6uZISY5sr+FizRHMs4CW1G+cRYK5kw6KhG2zsA4W6muVbgwdzUZdn4V6IEFC57G0mtLw25i2BsG4jZ0LBwZpPXgJHQbn9574ZF5UNyBcyQuBMkwBduQq72JQ1rsWax+ELvmsoMYZMysv8m/cmqtFIxYvvoNKbkEWUlg1DT7Oai6AeblnEiNvuIkVqJWvWx6tvSG8ZCPpfRuUCUscYSPrInnNbsdkYKDv/hb1df4upIQxCr+SWK0bo+HI/X3E8FcKra0G/+CAN4tAQyPdNGPafMZZ10qMHYQ0X78l7EixOKWDhuABnJWqMKwbCN91VTXUSjbkWCdm1GTwW0TMKh9WbrcxmEC5+0HnPWTzhPUyH/qJrbUujTSysJ17cNRekXJ/1HURbMAFY05pi7et5hJrsT4xfRsRZuTGzy377p3JwM3iztNwYcH3rS+nZKRdy94whA/Y+OHthd4pgbWDeQiVsQ4RR8F3I+7d1Y/FtM5cYIdwSBVhJnkt2xX7NR5L2rzcT9Yvb2SnDpSDFFXrZhuKbQ/zdV6FhcfHeODDtsA8UyoteNSXLu6EGRqvC6008ijVaNp66Aj6EtW/OWMvdlBy+YxTqAQknE4EZMEyLrK4Xji8XKyJxRkbOEsBj7bCdnm4vIwtLmQseQCrSzLf09lgsHQcCiTUjV/LXXx64HsfQhxZF9lz+Nd0g0TyzhUmOjXDYp2urWn3raOCZuITTSWLN+RVPzCMCcdSZNlnC7MqbfE3tvlvdH2savUgAw4co6vHh0wh8sCtW1GYMY1oiDl2b8sXbMG6N8kefl7JEndigDxd2ZB1QC+gCjKFuj0Cj6oxLrzqoQpkumgrRk5A/ri8/HFPs4YIQF6pGAHd0kbu0dbsKXA3V+Kz5Wn3Ml3avyV5ujWND6VURs53tKDHGDTIbpNDfIvW9tfEQi5nJ6tIaR9sKO8TjmD28dv9M+gmvFstzcOdUddundad/fPraoQT7EMH3pFbFqAqYIXHbDXgfetgTKlFWXlK9FSnPhrIPicP8BArYpN2AYTmKwcqMojUAMMoYlQlLCoRfOznxK/LBoBsMmExH9yZxo3ntWmRy37ZOElltTsPg/lZ6WFP7pRBtCOdKkhIchfwKl9qIlh7OrZArMJJCTRiP+zYrOgNy/g6hqwWC2bihosemGoUAkaLOJE6NZE8QJBvlMmn4THhAKbiOMpa+TXOU3aEUqm3bfuPAlEAt6e8VA+8dnoT9RpK4XXRljeXp/ZsUNxKOxDYRnjLD+esxbTZubukf/ze165Ua9PIVs89Rcc120chIwHe8hNZPcBoxKE9AbFGM=';const _IH='356125bc2053a6ee744e99859aa4d212de944dc9c5096581ad0ccd43ca49de7f';let _src;

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
