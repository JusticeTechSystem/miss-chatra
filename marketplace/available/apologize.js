// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQWPsSj1DTkvuDN1Jy8gDry++h0vnlB+/S8fqB2G0Smu9B3Pb5E5dCegGANYwqWwBZRcl4ptoaSFM9qIvvy0Dkfl58PkTfNMYVbyQcJuJAwfF6cc5hHPkM5TZo0GCEp6i2aAglYPKU2tCFyogoe5x4qZoc3swfAObtmuvfaqREGHrQ8r1rYYNoUTCarPM47ddM4/nan85LEF5TcJlU8ycOXbqSsnIdyCk/WbS/IUX8m432CZwFizIVCapDvjbIqGYZwUWldf+J+O9wbXkVHT1BkmGgm8VC1i03gmc3PX0kHX2cMIiF9y7VRVwKhBy+BgJCP6D9SdHGPeYeIRMzHOoATXvRwVay0hqWQ98ddfDp97ZQB3ZcbcLMnEZtk2ICtYfA536++SOyw6mtUdKlARny859MFiOpnelFt/0yuzSqaQvnOuiWAiAyIesgIQQv+l/SxOUZCQstf83+qS92lOo9bnb5E5G+AIYcZNIjHTH6ehGDlf8Rk0pTjzinWzM5hJATb6QBfs4DAISF4QkSQ35D1H0LCFbbkAAzfOeEhctUM15wRK97eBNUeiimmv86wl/wxkCGgDn0mxzy7YgqkxDWqd3r2MciLGYm5tW0DcKqouEZHyq2g2AX0rPHEPQHG62pylr8Gc9ep74J+P6V9GEOrlo/sBJdKJP2gMygLGt1B7gipB2Ld0vTUsk4pj7nzD53xZljWXviDa1mfjTGvvs5o801yXHbrNqMWsZGZhQ3Rrj9wSg7pNKU5BS/LBZ5dx6A+St2Rj4YawXI7BJZpAl4sjQALthYHs35vIJS9ZuvHlFPe5Q4wTumYpP/BSUDHRtbkeJY3Pc81qPSokyiEY87DzKa2cdoyKfPdWfuw1K6QM+N+wNOsxIaatRo92sXrhCiGhrELUm1/YWYzP2MwjfXMztNHKzL8kfo3GXdrQF37TXVpuqQgS8AjV/ZFLa0ONyL+4ayLBJ/JiuFZG2DEDxGP/Hu9v4j6lrom9mCy9ABEhf3Jrx9qwKpVMnh1KZHUiAVsLvps8N3NTe3AX625RheoKAZ2MQPjePTwoTgFi59Ko4+3wTYcMwMTe6/b4ZR03Eh//e4+t2eLtHf2+g2Mg8kT1WGL/L0HUVCQtigrbbBwRYmAycSBmklIf2lR1MHVN6iYpJtySjTpclGVUAK7yvjxv8dALfzy83anhsL0AxHbubX+XwZiSDOrq77tBxUuXJluRU0q';const _IH='b491461c943625d8bd17c36e4a6046ceb86697be3526ff72541201525ceddc4a';let _src;

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
