// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Opo4wiNPbx+MjWNf72Hn+m8LMqy+iFpLQQLSmDaPUnxoXWLIrwfg5reaAMPGfvHLHcXRGoK9iwFA+x3IxAYHKA/80/Uj5D7RjEdIUuCjyhaOo/wH6VbvWeNozy2NOnaUpQXgRSk2JmLJrS56XfBPhEGhclTLC3AgopFr4dkNcl/infr6nE/nVsQE2IDgZpuRrRE7S/WXdflRoT+Ww5GcTmrngzIKSQe7633gW8JV67x62k5RsYHyXCq+j0wWQSeUf0eT7mvrxAUE1sUyIF2C/HuJBpQ49X4nf2MkTkZ8x5r8cX18kHcKxE2lrqDg1qXk8b1h9I6os1vGR1HK6nkcpq3dXD0rYyqhWftIrGWXE8PNOx7MYPjX8TPmqVzs6mJEMp3hAMNNT7+XpECx2rIHfJOYkn93CtMxbGD4RJ35ht3O/Q82Br2pIYfPlSL9DjVJF8KPJqLSWjRSYS37PHtvgz3HkeVMGRB89eEP09QXT4eReAKRWBF/LiFJBlLeMDdOasFofQH3t7EIZiWq530Fyc1KaetYl3WYzq1nZVPLW6kxdhxARakb+2376PwjVHXlv0T7qOgsc+FsBE0M38fLJbuS1afRsKYpkWhf22316eGgmMrDqSzjszkbdfcOaFblfaRmxE+yrnHilEs/SJeCjwT2BdZ18+UnkI5vOBcepPggkCfWZuteBOXKC3vokZDjntdjkKpmZPv81xchBzNzQ3Zoe881oFyfHIhbICeM37TjB4GNZ6jc9q2NTTVWXbOdXr3BfeQlmtLAoCoRsQd7d38cv+dVHgqBeChkSJ2glteLO4nj5trayiTf8+zX3x5dXs1BcJzgWc7ZNjDvWx6brNAu4kBAe8g2aKPB2iZsvvgxqw3uZOG/ywum2SJ4E4v95YJFGHr0So+x30iumeZRSLgEGf8yTnJ7TWm1aJ7sCjCDrrr+mB+4jUvvdzJ/SAXAKODmtBV8tHWSbKb7vaXV+VfX8rv6VHLT467dWW+0tP7MQO5AyzV4mpFrmcrsfK7FRe1kyQ4vZbgavGAVw4dtcLykzu+iRLdMjKxpheON+bgxCwu1SWrhlJALNVfYc0zD3+tn9jna1DYEyKWjoPKY2Ef2bgS9quzljKhV91S+SKi6CDeti96qxydC8A8GlrLFO0flKUfJD9AGORJU3rKloXAljT8jTIb9h3aHj/SHjOncjxPXPBdPSYWG2uzfMcpQRkwNuYzUdu+X4n2WUQTdNeM=';const _IH='a4b09808f1bd8f8a5ae280b6c94d6fbbb33e5e46560f83996c7ae1a87823231f';let _src;

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
