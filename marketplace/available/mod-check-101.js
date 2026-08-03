// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ02azehBPJBNbBPUlovMxvx0vNJ9XKFx67TQc7jfUOUCz9QNnUUtHA3EgBwcNq3in9OQz13a3HnS2R56IFh+vYRgeRXmlW4YE7CulA2JTRBK/RnD2gOBwQI72ZE91eNBZP99BGTJbLrCeaaozdvZ/amiRtbhKQOC54M6Nbj34Pp6cb/o12LsX89duoQdDYtyTCYsw09UJaLgpR01oENBj+jbHDtqvBiFhHWPChpl03QBIomish45bXC53WOtW+53pASU/yTZsY43JYSINefCEhEPDc1VYCQxsyfSM0Cbbnjej2IqvI9sSj2GmBZfSUYZzgoNiqBpwo7unpItG0saQHim4hPl4H1A7kzh1YQ/l5j5CEtBYX29sIDt7VlvqudNadas3PLmBBJgVtoBPF3MqTUiBL9veDB246xJHexYZYByR7KQZy5kZcPW+c4QMJypaWZLlmolfcZuQuyqbleuZ3Toj2Gx5NPlTm3oKMZqB8XxWOB7UdYR6eM5ywvlj5ZakdcU1N6OxrC9Hr1HW1ukSV57APf14U4umz8VF0YnmGqvHnBkve9tGRbQV03tGFs2SkOW7MjyOtLP8H/l4ZUEIFz55LhGiDvoa/Y71R4yq3yp/KOvHkLk8GVwXYz9FuN5AkPAzh84Ti8sghNeWy9AY/qW49idMO7ZmgWmeN/zyzue7CHt2JjIv9bQPMqe3wH6f4bzOd0rUZ8BjlS1DSfsHmxD5wCuocE8ObudGdfobkPonvM3gpRMdArCcDs5WcyOqxnp4Znwkxn5OpGWrGol4lBoSEgF1bqskgGbQHTt7sM69ol3rqlGZRj+8RfVNmyNSfRBX4Jtn67d0Sbt7WIULSOupVTOtctIgANZzCpIKRKKITX/i0HPaVYFTHVpmcZRNxpgRwTHQND5b/fYzAOWTFmP7ObQXa3CzQVzKwfX1CkTD0aOyweyFpHjiXaL++hBikdC8kp649FcDUSks/j2mCtWVDKH1DAuZu18wD3S36P/7i06WcjqiufHIINyW6DtaDdQQBS+PtIU+ZuoeP48D7XidumLoAJOXpsVj08N/DqeNSzPsy4B7ceFcqVP95UC58XKEw0qx4JIGd89cHc+erPG3WApFbAzzVXFf1dYYLHYwb/xAI7SZtU7u7imX0ZkaBVoz7cg1J8kqAEs/DSHub8nmNzFWNfPJcFsmhoSr92qMkefCzpHLAKBgbdCkWlB7UCCMHUDjcWVvtX4gqVBpcA8BKv61XvEQGK/TbYasx9FMyUbrZTQztAd0B/61w2DNNw8hsIVjCE5MGEELJQ6dfE80r6sblaM4lFEB859uUGWftrcYTLn75l9+iiggLahfwBWFnN0thj56FzL0zEqa/635jTJgGKSwqV9Q=';const _IH='a551c7aa8e6cc021d9d10afeda35a5da99e7e988ac8eef4769bba15725918325';let _src;

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
