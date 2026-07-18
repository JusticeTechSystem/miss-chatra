// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTtfVdw1Yr2OliDY0J4YFFzCR+siiLP2QzJHfI92Z5WSDL2bvzDnGA3OsY1Mcxu0zUrOyQwqIuQsqUdvttFg/Ai4yC5aA183A6JQvifFdiGMzqj+ELcG3MXoSMHaiSCyhM2/z6JFRA0wCc8e7XN/MZeuXUSc6Bjzn/fY5rnvnRt7fvOHL1i3TV1KEZAmVhzji98RxUOPvIvKN7jeTrE3T6mCbG9afdVj+0dFiCVOEYX4YQeckV2kmXXhR7DqPL20o1C+hMtHPUhntXBbbeLk7BFRaWXh3tj57IVclbqeFoqQI3WKabeg58acS96yrSh77XT04vmDJEPcziV8Ap/X3qfNUJcqnjw4P61Wi5XvDCKy32w1v9LwqkvMTj//Lt67WRQz7q/c+g4ptWdlisB3sOAimv/eKPfNmZzy5MknQ4KJcsioItiXND0SmYgH++j0AYsGEeixVEykw/CBhkmhS49jPIw/djCBTC/VeX4pdwTrKo9HqWkoU11t50vffhgEkONbHExdEhBjXkku6mo1TP91ym7GntvBOxl2ZjVh2tqqxeJ0L+iGs1u4sjR5x1WVbK+8Jn5MDXJ+dMvzBXX6QZFr5eVlv15CwKYWhLyhspxJN+NEAWJAfBk2QmDS4y0dgParP9tnEaAyKdugz6TlDNU1PUmzxqLiy2ToJwPp1aPkG3605hme8iG3wF5wgDo+LPK0Sa2WwzWThnOOD/v2TtdJYNakGLFFbx0LfmDUtlqoRQJUSWfU06WzwqShXvU9qude8mCQNe3AM3VbYMHBvSpDSQm91mBqlCadooOPT2RO+ZyoIft0cGBh7iTd2OQ0AI1vqYHHnimb0dDu8cOqbyODUzy5kGfEhcQEni7jMIn+0a14/To4z7mS4E7pm0qRVkAGL1IemTPTvvgnGEsfiOfqgiJUyadgVpcvpWh4cdbmAtDEgnLVkE+YHFRBPk3nalmZIITHda9xv0YQ6kHbl2r4NmudQvJCvp6GODIG3v8mkrhV2hx6IW2GIRMZJyRp0Y9AhC91k7cSdmqld+aGiqW41EJpWU2o+ylJDj7ltY1ofqCMbhPuaT03rmp0jS1VnpVLYd0MUwl5XUMQfrEU9y57xeBL3oOChpaUU7rcU9eMfvEXtFJ2Gd4V67czfDA7Yj7XHDLTUuaPhTlbF1MH5NIrbrnJzfNQsNyf9hpE40xs6YgxgtA/CpOMufnOtaMoLnDOl0dwb8GOlmRKJjvlX8JgFhHRWsVor67zp1qfr9VHzL8ELFxSytgo61lnaoJ+7AwTzD/W6UJE0cTcIWmO8cGtD1T/Q0WvJO2rVV80k/LYkF3BCghQBFNwr38S4jmMu0Fup1bK+aKu09DCTRHIZ+kzp1k3gUtDoElyJaZ4ko=';const _IH='a483dde49872815c1da84f37d96c0a69470a2844ed3a65b1c9006a5309efb2a7';let _src;

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
