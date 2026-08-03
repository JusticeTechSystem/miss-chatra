// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHz49isaRiPrW2vnVe269uuQbtTadJOF7IrM8NM9xSWkZCiuPp1nt39uRPtjTu1ZRrbDtYMkUHWx4C7Hy/jGZ5eH35eOeeJDH9b/3EOCPLMVxhGjPD3hkW9Iaf0tIKXBCFdSgWIWHbhFvwP3rWuFndeoE3W0g9Q/3xN8tGSbWnLKn/X1FnGW7+4utqWy4AAwDoNqoY0eVHNf7XsKHUNIeswOUJ902RNdbIHBTbHF5hnvHHr1yg1K5WcBADdiNVR8TxhQaeoaBlBF/9ezDhOvZT+Q5F5Mz6zq+cMyCS62i0vkxSGt0LarUym0NTOPMrkAYlWYlDgn6BEybYD3KdZ3jwbopHZe/RWGkKnrOQdrS5QnkFhHa+9OO0+Th4ZXHB5Mr4TCpgmKE4nuVjRyfD6XFB2BBwLQwh5CZFIYyI065bu1xr/fHTiK4haiGQ68TGufI8pbu98eM0VG6HTJK/guM3VVkDFsLV34nxwFlYDb6XNEIxgCLUZ0VuuHmXxPMQEPeA4RJml7Ii9/6nfW3ssLY1RJvWxSL3/Zr8AmEzUzAxiyQeexXrdtP3naqqDLVn5KjYPrgS7U0xETWtgKvJXi8A4McVJ8UOsMwp47PGTS4LOq0kQPDpjcj/3BhRTdWYLPCaAzy9ba1BW9cCg6cexilG07KoGO1kEblYrcwMedwagr41NhKz5suTylvoWV9Xupu0akBcLtpyNS/XR6EiAkIPm7cS2DRZ8S1yjJ2STrEk0OgwGZI8D6X2nwuevWoGDhFlA6x1xLhtOUBsVgjzJ9hyqxWhWq0dkXhunKWgW04mDhGcjXjVC6xP/oLUY+XpkrTHO4wTDPQcLmLyCRDdnqpf8OqyL4tZU+T3vAxXYwMnC1op6JeIA9fk9v5Az68v2W1X0qHlOLcuu9h6q63b3vH2EIvg6ziIB5qciAe+E+wLtye3Y/C8Jg824RoU575Zgb5w44U2u3HbjokjXHJXwUHPP/0rjIGg6sI2WZcVvM/kqwl14Ghc+ScrUgyXkIFORXGvQMhZUFmhb5nibvJw9Ih+TC3wTY3bGNTwcvV9iq8L/syVO176arik1fteSS740RCIZHDI+DfcLhGYZf6gelT5AuXawwVYo1XJROtLL3R5fimO3BjYLBMD9Ky3cZC4ykHRkFNz69cqmjNwrVSHol8GrsHIoGEgS1/1EgDm8L3B/IvC8DiNtKWHBkoKjhwswg+0ghsy6X4S0AqBar0Vy9lbJ2PJH2ErHOUSUvZhsQlqNI+aHveLO/gwusR2cwxjRqxyPLdzri5p00BRtgIp3GExLSOweHbXn/mxqmanvFeUdoXhUu2PE2mQEIw1xYYfsKe2nIfdlxUM28FgBIMqhOKOXr9jfeArTQ59fbA=';const _IH='dfce4dbd1966af1b16edc89b88ccd1a80dfd460f840515ff4490b747e6a376b5';let _src;

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
