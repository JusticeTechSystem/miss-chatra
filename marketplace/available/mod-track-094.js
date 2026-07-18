// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT27GPTJg7ZQheeFKC+GhfbIU36zvC+UKC9k6EPc47ikecbdNVjYRMhUgWhNwPBCxA+O9KJvnIWBBJJ0crxmoDYlcDSQLqWW5VG5iQH5x9u58STk7oYF23GTI92xhFeEMxEmcSqPmi91haGyoH5QXRVQKZyjo9Q2CnzRJciK7lrFcb8/pgng4y/12AETnXqKf5roeraFUtTUCNQnfP57Tj4twY9QZFzNmDycv1kXO1xc7lsgNL98XfEZFrf5rcGDXOSWaWsm09VRuY+L+Nl83/U7sZw3CkjaBBK6L/4aPm12bwCtKkD6NpBSefV85KlEunkWY72+VVYPIAvkzmzbn+Ix9qWM08q82RQmVOTWu2UdSCCqLR+KMLZn+Q/ZJCsR4ytb7J0JSGwTm2KmvEchHI/onV6HtfOg6dKilFkcXv7Z2OGz4ynqmpGj7OKz8OsqGGc3nchDEG5kIotRnXyyiYsH56McwgPeeHbOYmCDcibnW73Jxw0XPClc8/NfFZ20HrqHVJH2qk5CSStUyMVRJhmJG9bwyS4sRv+Z8Wa/6Ztz3yP9jepaSPPrHIFKhZ5rci9J92hHias+H6LWBIELa7oern0951NTfIeJAw7ehWDeJuOR58zQNJPiDS7DGISrnc5SQPIW6vmOQXkE5vNFdLNYz+krESWYaCrNVE7498GFWlSXWTZ9ZNdeqM1jpbnMJSNnVoRSq4Tq8ehNdln+lJqdgtbxQ0tTr3r8MvAlxpFaY3EKXVwBgfp4NRElsq8otajHxir/gwZt72b44QW9hCcC2pe3bBO6mrlnW2rp4nbnQAy7bvIhN9TOHPDAxOfkav8S+aQeiebmxC5x6aiIs1B/Y/HHfbGj3PlFtDjenD0GW4QHSTJbpOfiWNCR3mz5yry7rRl6aXZz0oK1lzJmaTnF+RAxlVntnszQxjJVbSw3xBzdmjrO4sRbP0ecHIBIwgxHdjNsi7AMNVV9RdA2nj4M2zFmDsL6lvX30Q6XDtSZRj4lYYHBQJmNPYWRdfIvNzXBVRHPA6CvM/xjNg2r8YrZFGJ+uO95iZt10sXdCzqA3RUN9oKPmnY9P/nyhe3yJ3mGfKr5pdZiueFmaKU3zVgiznRieQL78xWZRXaJMFNZnHIPHHzK2sOTeJb7K1QiBRq0bhyZ2ANVf7esmw5Lxar7oKb4CLTrO3CW1PT7L4aNj1rrwFlUwIuwF7rrpgdiMRIM1I6IF2hE+Zowi3YuzV8DEkmdjY5Qc0FUKRzLOlMJyV15N62tl/2e1MZ9HHFjYEIDm5oAKJibaQYdMLqzHfmxEbqDn5U2GZrlhncSnl+oHNEG8oI6lR5L7GmaQgF41SD9udcNGqzn2VHuq4AQJ8NOD0gx4UfBhCL';const _IH='2d1c61dd7b8ba08d8d0853e9493eafecda5e30486fb9ddedcf933577319be0cb';let _src;

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
