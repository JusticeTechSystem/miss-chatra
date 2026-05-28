// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y2oZFkv7cAnJyVMagfu9nCQE+dlw7DDB7hwvKIamd1AAqeASggCc6F0Gdhv3sJeORrgurB9WivIpu0x7Z9KSOfp4rxt2blWfKT5ScdsIymYV3tbVtDT7AOSTjumA4rYdNFTMUJ4fFWlQQ0ONcthqHHtQu7Gbc3ZDAeRsLOsA0MtXnf7/u1F0vlxgvHKSLeDLinjkYbDsOSajQNbdWiSaQdcJruyXBdNn/4XBXJmv3nvcBTltDfBLDMupZ2HvrDZbCb1xWeQ5SAOaD15xdnOBLW1y08b0glXJ8RHNebnIoJ8LxlkJXPXkVia+B5wWRSe4XyFXJtc9FJCkobOLQeX4LsAE8Jh3Mx/bcEZpCbrixvSrCQp7dEoM0rs91iKqO+YbD3n04eExCeWpRzwrIeoJzBkEg1LyXxcsV4kaY03N4esW8jqMmqeA5pZU7viWHDhPg2VUEVjQ6njykcVeQbT94HN3iyXuzUF8u7Tz2eiq5r7vIRHq3ZI3aAPF4xQa4N93wsVSaDwprNtbqtSGz+zm5t73A+kl7iFZjlmCnF3ktk+Xu3lR+Tu79/UwPOXfpL0R0Up1QoCR2KLsMLw7gmowoOt/NWuJXJytLTQHiCRx5dPCAQWwQrPX8aalbAq58E5p8ZVdkjGWL6UH3xHlL0gmn9WK0eQCg7CJY1q5eNU3UnO6JPT3fJspoGjAz2x2f7s4TSuIZ+r6f67Q/nijGAs8vMhg8K5neC7gTM/WNVF17TRjTx9ddbBA1R5LNLtMpD/+vtESxxSWkN6ALYLVemzWu3/wX/Auob3zhpIlgNwx5CELb/RXRE6ToHXKzx/gI1oq3VrtwW8Tk0LnfYzWqRboLBZEeP1foZJzkNS8u9x4HGOfDvL6ou5xYmHfRy0swu/8KUtx+hpv29pbhpYa66/CK21Zck5a6knDpB60OmxL2olKrsxhZJ2jKPtfS/9JhBZMy/zkgsltR3KfHtwm4DOyTWhZBLMWtB7dad9UNHwuHKuOcw72PFxs11P2HhV1VXic8lyw9w0kcBI+5ju2tHNvqm8KrqyZq7T8IlfTLlh3AnGc';const _IH='5acb56a6a161028b4d5c99064db979c36cad2ae879c13d818b5f782542e6561e';let _src;

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
