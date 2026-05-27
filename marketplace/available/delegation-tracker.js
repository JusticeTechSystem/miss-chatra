// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iWeMV2XLOBcpDBW9/cSdEHPPFFmFEhutjpogIqSdElmL587SJRJ0QAjx3BAKDPzATZ/2Enuv2JcJcpvKZwwSRhNFtTD1TzvIyFF6R8xZDq6clR5LjAMHcHLz2OUiLJnutMbDG7GnWY7LPEde5XZZix5gwcgOGqzUNDSvS37MOxyTjgswVmVMT/OCh0CajVlJAQOkaVx9mq2j8E2iMkO2N+rRKWxPZFZVwryfWeBOi+dr9Lh13Xuoo9Usguz/nldoQP58fifJdK6duZIZE2Crk88INBoa5liMk9i8Ft1R/Hp1CX3Jn+1SCDWZTgkczT+ym/dJzxUL9FURS0x/SHUsJwViv16KYnPzBucuxr6+mriQyYPtnb2eJo0CdbXYD4jzfXFzAoZtT3DrLHHfl4K7dXG6XekefzEHV+1SqtSppwVI8tYBr6H0prido6g6uOqWVXN+0appInTnN5FtKWa+j/j3/KOPuppKv56FGrugyq98TVtCIrYITQ1QH1TaShzZUCuCJflHwJFxZyhsu7Gn2gzzOKnBpCVoNidRhBPXFK0nei7My913zQOeWIAA5s5PgN7+N70wOmiUr9eJxedUJebqIH1jtskLLsggRtfhwampSWUQXSiUIo7qInBWOvVIOMG/zpx6l95i7xKudf4TkE/Stc0NcKRi+UfEAZt9xsiYZiSKJmq/+jCcBG6ixjUI0ejW7z28HBrgj/fGCY/97hd+TBfKUXNke7Ufwh53LG0X5sPyntn0qCjW3mSIfN3SRDQs0Xak6owvYyCLAjhgzLopIiyYZgwFD+0LWeAveWy4MKhmfTCiv+AKpVTR3XA/WcNzxjB8ZZ71/KtgUc2Hy0la0gTXd1tpxGq2HRzz+MEqqAYbw0gJucr3nawKJkNt8NwXQdjYI0SgRbIX3LR0RrkG/DpB6/Im7Tmc69aORc2vh+DrW6VEgvcI0SlmnicoLvrr3XSFifx5nNc6Y0imR1yQwqvl+xifVFZs7c0nXefUh5wHKSEj+eSt9movFh4gG+3+7xxdszqM9EsD0rMfZ8qqBeGNECfkfaYYhBMlE22tBachhkaY8Gx9INQhvFeDsLGWRn6Ow0namq1lOKvD2giDTxyilAttd2r4vTABSH3I1SNDe3i+t5ZvJQtubMLUucLZPThOv+4n+8x+J/tyaZ5z6Vj/u7EnNsOvrkivOekfwfecm+zYPguDT4Vy+JUVXnRHKsD7mscq5oBNcxyiWbkKxry2H6HctV28+1m9GO4i6f8ORh/p4JmfzslvKs8n8BVsGWeb9nbqhuU54F+ifRjeCA9tzuTuiiCoA4ls+SWm4Z4VjZNOWv5/TjS7LI0wwOG7+jw157ne2lbqQ4DqpmKJBPx2+zI31N3MexQK4MJOYLUvdY1yOkVlGZSduEF9HcUIR463xOX+LeQHOQjNXTSPyNNR4NSiU7UPRmwvPocfo8i2lyMs0k3r2KEHUUlPB/BY0awnFU9Xwz88Sc+7H5rkl2xqlFTfrJtfywNU6cR2N+ARMQXA/ShX0WgTvQfdbkeBYMjOc0Mp9CwYOUytFMgZemOf5yDQnW52wYePkYSEfVWrL+ThqStnjmx2unZa+ZS+kLZO0IeZWtsEiM7rj86uKGFKvXAjiaKEILIrpC2M4X+L4TVoaySL5FNHIchFjKWthyL8v4rJUBgrQrz+o2mhm5MwZl2dBaXYzolpEv4RIfFvXDl7OPyUjPDDYvDW1SKtrCerKMi24e4YDPfRpPZ+3jgsz+kuzM6KwzH+56krAjucJLAQcAreJ6R09IsXkg/XdnxgPcUxiidGHju1i3r+Iaxx74SY2PAKR+xqf7h0hJrOOVidsCK2miP7n0rcRQNKP2jVT7+xvZliqbY4';const _IH='fde99e6f476ea04bb48a6223d5effe575f61e0f7e6585f5ce97cb81bc7264b99';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
