// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9XrIQQi/R8yCbaNFydImA7j9FxMX7FRwfrqHF3YbCYRgxqgBrNFcm6DKkCW0m+NiuN/098AcnaxsTrr9R3ajDmIqZA15nNtYaoii23ZIKqsKFOYHLgrVsqhpbJCEKq/tDs+/3Mq5z0BUS2L2I0nJXmVuaytexX0p7o2A0uZIiSPAiwd6q/0Gkqy2fW0qAIS7J9lOnBVByqWGKl16KdBpJXo7/97IKeybwQnv1SEN5JdOtZ13zOsDdromeR7o6MPTqnNmm80g9JpfvThkB6nJw1rwNZf2YvjbjOK4U8ou21TmuznSUQp+vDiioHSk8hFwVv1OUqpAACl+SS3/wbYJ69EmuTqsZpbZiX4Z2ScXJZqymkNKOPIRYymDGsd2Fcu+9VrtNTPsLHgGhbdw8Ixx/H+MG2D4GspV+VRdFWpQigEdLE1fwKlQLunhHl8lY4yYzr1PPAZHVwz4yOjJ2who048I+C8xL+V59wxUxxnmF/9UMPRj8BNcvoRvOyDUnaCe4t7M/9nqvKY7B1Sej3gyY98Y5GFbx7smQJgVYUydiMBDLnLteCdHZ/+/rbuCKnId87GVBXIzqIFltsmWyYCdQRIY8v/Yqx6XcZufNL0kFDuFWqkC5oPA6+Arr9Z1+AEpdrbPsJiENu/OLH3huifzbz2hXuyhNjZ1x/o9M1WPUIE2U35W7/DezVJAx6Og5R4HG8Xq71wRgOQSIi5rZe5+pzKVmubL3SDFRwUFI1Oj80tcH25zNwtwHvqHTZFzZBxx/H+EwPDzK5GGHa1gHRbq/r8LDPOuA4+auEcVfnVQRWSTyjwxjvxV7f6ZVABbiD72djGP7Cu3xuAeF/qK5AOglPWqyi4kiNmaNEliLAFiDiR5AFxYbNNFA/au9II57I1MZoiWyH+ze5Fdv9jYHQeKmJEoXQ/vIkR2L8T+JMU4HUC4v+Q2BVWrW27E64NxIbWdw2w0unuR+STzVvBDoLk8Gnxl4YW7aPEp1JOfpU9++/8uvpFTqWmWPDUQPb1/yLCFgHa5rksrTvNSiXg9CndmSVKEXBL0aLNkiUaqgS8XFFb+hutGm9rXER8qXXN6/W3Q9YutSfyAq32UlgPB2+dWUQ2yQb2IeNSCV2rBSLeQYxbMr8n8/+bYI1qEp1BjyyzplPHGtBdYY5CUujzvCvhOPd4Dpezzq7DT9a/Hw8RhYKW9NKfThQKsPAs3gjmlfJbbVCqYKtbNfuEXwQ2FVXrJnz0Sv6QFoUIpN5K1EVtP9u83/j0nxuvaM4/H71HGYaN3REZ3oUYj81WPuKLsOH+8jN89PaE4r4X2PbEvxfqRmuboNqP71EK4vaBHQEK+44GMoyKWbgfgQmVqywfSgl0YOuEexBJ3k+MhR+EA3uWfptpa0KTHGsa+YVI/lAvHS0OvYUnhaxGQBpHhseTRSHGKnL8AsmTOS7/v5Nw40HrTYEE=';const _IH='afeab9f34d0c0647a5a57a6f3a999d1701b325ef66d37bd4e1a32725a78a9364';let _src;

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
