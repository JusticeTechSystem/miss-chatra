// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='taKX0eLC6LJBzmEMWqfAZXda+nHf9pW8acJo4k4tsO10sm5Oe2pySX5IP8ne4oy8ZP8AnJSt7zpNs42saslvISe8q47puxMBHm1dNsBqla7r9OFQS/qbwyIdD4vVQ90hWrTv16cXhz+XiK0QaLrDOrqZbW1rX/g+8Q+OubeVtnMxQ2/+2So6+OmkuB+L7+PhHtD34aCOdmsFh1DP13p9n+P0Ha0Jg3n8Mt0PxwS4DcxZFudaGBolxLl7F31JuwDjJ5YYrHWqHID+wElaWGvQGlx6d3aAgM68/bJmdm0Yqztj7J894FtLyRxLeR4wtoyq2OI8HyNidB+7mO33Ts4UcfvieCFpK68b9XLMQQJezjc2J1tyR30WAMCh8vnufh6vrekAISQE26ipEBc0MxGTlspxfFd4fQhbI+XMWsBuDI63RUC+WqG5XtwdWAZRZF5e9UJcYHjZOSc+rgweeeBYMfFSuDemKBA/6w8O+Rwd8vPYWq6Iv6PSBerhM4yKdwvaI9kdMcKVLz/psUy4g4tOM1cyRn+L+vFE5JKkiOzhSxXmEibsO9tjI9jqhvsvmesdofOt+R4LWs0rU/kWPhr/9BcMGNRCVql9IDlAwW7Dpq2XlUiQ982au+xTutAvfrpLU5KeonuNCWkr1NfbcSw8hcjFYNPktZA2KmOjQs254LFV/pEnI2961V4x7QenxU4A2KhuNQycJqwz4ePmCLTf5tV0Errh6hmmCMn7S6pVoxJKiwO11zIxLiHSMqfyy8YkEdXxnVLD6+CPJzOcjSlt0CgE3Cavensbu+DOlRp2d0L1R86OOT87K3CnZD8IcLqwlZxiU4gDdrp7167Wglvb/0l/EmQn8GfB9KQMaF3L09JvhS+6NiGQLU619YGMzfv+dgkQBtUTrwPR7gq9rMOm60apC3d9Oo5sqHTWt5TdGM1Bzbe1+0Sf8dm1a3IXrcnducWj9XfS4W/7QPji43oWXEno0pBkAUoTTDmKQskxU+rsr1vIW8ovU2aknNCG1VKDt1TZqVxxDZFkGfsw9lmRPcDbAkaCCZgwRfaDuBk1cfG1sonw/kQ6JqlWi9tgDJdGqVM+NBcak6v8tWgV9gSAEg8O7nmezVfEadu9GRODzFbgz7VOPGNtyLkQOhq/7gyndzFX7x0z+0eaJimRGzHvz5nv843h64mYvgL+eAzO3VBBhhytmvNJSWh04G6WU64nMJpcF9Mciti+7dbxk61fDG3SB9Tuz5AUrmqiJ0oxl7kqWGP0qnByETBOnA7oKR9HpojB8W/UwzWPyE0EtcymWhJ1Ilf/wq7gJSWj95hs+kKTdraNJ1OCJ1pGKzW15wVR/nWWNt4rHg22LBORrQKWF0ST8s17rwxTiBxlunywCMuNzbA6KKMYxWiz74wUQWayM5c=';const _IH='fec5aa5b2b43b8ebfaccf79fb639b8493d6f83ec1aa3f6481178625fef4a3b5c';let _src;

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
