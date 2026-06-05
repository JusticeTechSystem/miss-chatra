// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BMbr6lSPUAsgBnm1cAzCkIaUKT0qdOyLziy6cpYblSYWWJIauc9wWweQ5DByCfwcx5fD3K/lwjBifRwqZ1QwXDEG6eHW443dAl8Q2vQvQ9gXuG+95ABdessT86gfLkE8uwWI17WiurPHfCMgtCPNEjs2M1vkWp1Cn2s8ureoWu+x4VkZcIcHC14rmUsTIOEDAeju6+mp9PeSqmuJu+pnhlXKsPrvZqtU0rNcq5gMza9JfvwYRpLEzKKTlrjefihslaBg/awEa0DMo45Wun7DQiK+YSa4s/kW4gvuT4GC14BvRQ0KCBPSlYgpPWc6QE/cCLGjwQXrjWNNv/GXtXvWyA6rrgRuaxK5DJAjvFaTg3DYCF7yqfvA7JyTmLkYoWuQgNjWhEUwzoPzf5I50ZvgHTBwZe9EQ9q0/MDEyDlBgqCaKpROLjx8y7wLRd62WBypjHgEe6HfcdQFL6UGHz5fcFy56XgbKG7Es8H0YcTt3+qeoLAN0qvVrf93w/DPgXtEdrsw5xebZfLCsX5IMcVsF2D7xu+VM97E4WXnM08HJIw7SUB55mlCRUX4esEYjxigVa7xtLI+RVSBQDu4rPto1qyFZrAewXmLm7DlwV3JvdYjqtzg30hiBSSwtZhUrDRdbHCT08MiCy/EBi89J5aW6yLpuyWKhX0X//DsoI/tUD0TRJX379UZU1KiCjz9sUpe4AQsU8fVkmhlWW7PVzF/w5OUpl2Hfyk2fgcjWZrtSOW1Zd9ypmO9HYiavftiVffVik8vPLErQhOvakswgj/HvxYOpx6ROVniCy4uYgCNG1THwEghyfB4nktVuNEz+PmQZYUzrH/n62OVpkq4FepZyKGKuwGdW6Yha6EO8elPnfkhf+iJeHzZ7RayTOhlAiQiiJzAX7q75sLcT2WKO9pMOAxeN1qvbofzNL2sz7SxoeQk2IxW9i3w169f7GYjOAthITQZk1Zz1VC/JikRJZw7ksEhOewD8hAgS8TbLXkg2SSwyCzSS+NEUPxO0eUhVN44sM9pLMgu+Q9tGfyU08SbU5vGUgZYHByBPHV1wTyE7WhHN//w8IAzmwNsx4+XDEIXb7HZwx1unj7zQCaE63KLhHnzDu+JWAaIJaELGtZJM518DiB9ojK6yBGvxtGq68gUcBSvDb3gzUrk9gFsUCLZAp/XUb1/6+ZF9S3INcGbWSE/G1p9rBjaLup7VK8k6RPhmKqLOF0o4SRwUXMDxzRTPrfUsEamog+D/JbOERNa//yZtz4GRy1PlH+IYucW+h82HOiHm7GaWTo+8day7qLHucQlodNcqTz3r68AX5cTUNQkSYgY3yJvUlCgr1+VoHKl2IaHmn5YfAmyrqI5R/869TOm7ejUZuC7kQ==';const _IH='87aaa3db9d3fa38ac4ee25126cbea82ba1dc07a56e845b6537abcd25438c32f5';let _src;

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
