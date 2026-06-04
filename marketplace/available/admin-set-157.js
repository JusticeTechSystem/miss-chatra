// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DV1EfuheeUc/UAZLxkQqgVtmXOK+Ly2MK1hJtknOJZMpXIrVarWWwx7Q6lGcaBw8zmkZA7Y7j8NzPXlD48tVmUukqOJRoGeV64qKIlfYJ2bDTfmsJnlxzzTdJ323W3RmFl4Gd+DsL9dAfrjHyOBq0ualEglJ+HOmZKWVxlBXdI/vd0MdoqLjMABzc7j/QSv8i66vWmJJd4XxY82Z8FjFhyUoBUfclBqbqDa3VnV0b7Z9QpU9V0ZePAyO2nHBST7BQi4ksZNWbOxaoyjcD3ld6DoHfi73lnzfi+Z6uYlGcHwK5AgIn55Ej5WKbYkPLKQp/s49awOHKE6QiX8E0l3mQgjQQINeqFSRLnZVtQVP+BslXIB5b8LB+IMp0mJ+s1n3YZ7zbLPeI+Ql9Y5ZJn8EGqpAUqyrbazSFzg8tyJM9vENsEZNOLljn3srvn1gzAh6JB3iq9PTLIkzKfnE8V4pVwfoAGTXbmnEqWhCtPvmGHVBwuPXaupTJGhqq2N3c39OoKMIKyFY9HyiKfC7z+6HJAaufvFsWxH/QpzuHu4t8sKkBNAt/V+vewkLczNFTYYLAmOkJGIsn3657ZnfE4z9yvasZRnVKoJkXVBaF6FXUkKNsrUNoGdn9VAX/etX+LGOq2Jusg0IWyRwsDzfNkX8+KVf/1XB7/n46aM7KYR/7GyJlyhXTV3hSpe2L2bO5AbjQNTVj0MKz9TssIOheJ+CETfGph+XnQM2a0VtzQiOPdEhWiq8OFYCOefyjwpcVdvq2/occUxBtRsWJSIyZrRdpgG0G9xgkv5lvNoyRyfZjX9AZgtd+w/qUbd+Jy3hSbS9U4Kfjp/1DM2qTsztF6XfvxrXnknOapLcz6w2kJlhJHk1BRrtAuta42guiAAECY86tyIeLSMcjjUv+tJmHS1CxV2jKBo5gGBkFMNqYmhSBOYnaq3nXMmEs2larQD4bdkxG7dHJ7rNy2hMWv3c6NE9M1KBGfmY7xU3PzAs5Q==';const _IH='ff793735e35a980f977687bdf0ea9adfe9f9a687582326dd896e6c5789ce8599';let _src;

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
