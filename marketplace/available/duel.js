// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YAmdx6nwH2k5/bKmF66+DXaCt3D3y+bqUZuHCHH42msDUAzsE1NhS5K93fhniCCcfu/H3oWuUKngMUS9QikJXTIVMBN1K58AfdAtzssF3CUj2oFp4jGWdk3+tKcCBf8eWcf+A+f5HTa1UDbxOB2JE1qZX4YGta5wSyJEod/Gd+Na8yiQuSWaBAljzFKuTOxhznTSXCIrhZ0/1lRESc81IMrViNner0P50UNhZYw5FmjVenqbpRyYjpMUmyyUQoCzFkhMtqFD17E+cPZiIVVrF/8knFvkSgWWlPNjAdn4h2dfcq6Fe4E0EL0IywxUJmdBpkWE1F040GWgzxgBXKCeEF/xNiuI5kmyhARkYorEY3qdoYvcNgaBOZjR4sErzanhetvc3PtEWoM6BINUywUJTxuknFSTkfKgmzORRto1U6uNa5mgpyMCBZQCr9qGFiXDjPk8S0FxluDBjPxqW+VD2ZzuTQ9XxkMlBvRAoz68hXcMZqLHhKB4XZ+1A9KoBwik7wCsmQYQGabQ1XF4NnhprlsCUGbIvhxEFp35X3sEOlSJOLPZnGtdcAzKifvxP0WslwbuEbcO12/LOd+1on8L8SRdMr8NFJrXehTmpKRFmnBQYV2ct5jZO8wPGcJzfMnsFsUP0nGT3xgjWWG5daMv5ZdcuQvavQs3vyczanu0npENO4v1iSygjhdlAgqxPNxGHAF7JKb225Vmml1ZPCj69EWiGZlxAXCrcPLfspWZ6kus91NkH/6FkSNjX6Xoql+WytPkO+JwUFVkolgf5US3sch66XLfut2WUaONZlYGKmdSpPiWZgm1S+FZcIayNvQmxQfLGpyfyQMKHCSbxrgB1L7WLj4whsdOnLgrD51QxWzQMlXOOwLUAO3Lebhu7BxT0DVUH3Dx5Qys3behgURRVF+KlWb90d33ztcqy6585torFtUQdTF9LiEffNBcZIsJaTzwqopnhaxeKHN6QOVg6oDOqAXsCYXpeVk42yY+EpwtZIgJ1tucSBkuSZlc8gtLOCZA/cOn/aVENn2K1l4kZaWd82pZKya0TbMBB1cHXGi4Tg6ZkZLYbFU9izLQFnn+nGH8/2379SiPtYeNqGXvH7RqtUIPMiaR9O/e5jY5t5F+hVslbll21MqdIcgwZtVJO+iJuqL5F3mmw/DWClv+sVd/cxwEjK9nluEhxgseIYFVf4s=';const _IH='05366f7f644c78139a7608cec2a59362cb08b6b8bda231448c556266df5da736';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
