// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VkY59zbdZHGTp+iYO2bw32nfhE37y/XF1nCleZbOMX1c+Tvf3N0nMk4kdnST+WyfbGLVYP6sED828XOmZCFNnaTrzGyrxvT1ZkilV0+iN3qwoA9CgovZUx3K5TMP/ZESmd9DOWLlpN/xi9xsziYluXcnoqp/aoOjwC+rmSCmSkYKHEQvAXFgL0qX4D7nSOscH78MjogvypS3DqDhhgptg1kvSOfv+1OQug9g+JARweLaAyms+ssCWI+PAhRdU3mceK4bbvmo9Ob+6I2LZlL2UjfxgN1ySUaV9QA0apLRpzMO+CpQur3OkgZJygZOClNQZrKkxM8Ux3QEYMfGrUMbEpsffDKk/tmHyEcn7dFLSvBRNPYUH5hodTHHX2fWMOi1AVabGHnqvnpE+ec+thFfWF66A3RJMUCtDOBlzhJ0wJHYZJWGfHK3w5OQS21DTR75tawdh/qPkn3q561SNKbMjxU3bEjX0NSOMjzCw6HfUETuWCasLaeJ2rotFGQIgCfyR7UPO7H/tQsLyV61w8NcQDUM2L5a6YxgFN+eie9G/XRl08GOksJrwYUrUg9BtFW1ReOJEnQfW5afjweTvn+NaEktq9dzjkkkdoOoUVSiHmJ+/ycX/XxajHjNzIfYdiCQSnW5l9IicXmY2tMkzalgES9g88yDrShN+HPhqtX+TAJX8FP0UBSja7CR2r31QA6hIH1s2dsJZbW4epfD5q1t5c4H0w0St0Z8kck+vbVoBngEqFuONU3xZzl72JaRCRjJzfaa085sNlB5CLrLbA7JVm91GTcJ0AL45Bq0v96ML/lIv9mpYufEH5IdL8823CbPMLLQAuHGbXElf5hUETDABI4tcVSPLYAJFhnx7VJFumB0t5jQPpZ9WaV30UPbsJDQJpotMa13tJL9HVUcaRm37OAG/xSS4N8yW9u9aY22P4O2QXRTf53Rw8vOC/qbV73ShRIfvRmu44lsXbnZdsl5yH9YanlzCdKUJgkGKt2Qs/Kj8YzSy+Np1RBh1IVpOILm0mTEHwPJY0kMr8AzlK/y+2NogT3K33/+pqw9NtQDmzPyf/vZmlKCPxmIDKTFB+7WQ7JdN07v5Ac4WrccB7DxWkOzU1ENWqtRT64cqRA8uMyRpYz1Kv/CPthaqAM1XUtTFS2xcLKmkuzwz0GQIbOuXCxvARAB1b6gaiTAmlK+VKyymZjIdw9AYeZaUna5U4kEiK+em9Q=';const _IH='5393c66646fa1cf9e37217e0aae81ec4ba57aef40c6d10928f729e96928fac43';let _src;

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
